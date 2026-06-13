using System.Collections.Concurrent;
using System.Text.Json;
using FirebaseAdmin;
using FirebaseAdmin.Auth;
using Google.Apis.Auth.OAuth2;
using Google.Cloud.Firestore;

namespace EduMintAI.Api.Services;

public class FirebaseService
{
    private readonly IConfiguration _configuration;
    private readonly ConcurrentDictionary<string, ConcurrentDictionary<string, string>> _mockCollections = new();
    private readonly JsonSerializerOptions _jsonOptions = new(JsonSerializerDefaults.Web);
    private readonly SemaphoreSlim _initializationLock = new(1, 1);

    private FirestoreDb? _db;
    private FirebaseApp? _app;
    private FirebaseAuth? _auth;

    public FirebaseService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public bool UseMockRepository => _configuration.GetValue<bool>("Firebase:UseMockRepository", true);

    public async Task SaveDocumentAsync<T>(string collection, string documentId, T data)
    {
        if (UseMockRepository)
        {
            var bucket = _mockCollections.GetOrAdd(collection, _ => new ConcurrentDictionary<string, string>());
            bucket[documentId] = JsonSerializer.Serialize(data, _jsonOptions);
            await Task.CompletedTask;
            return;
        }

        var db = await GetDbAsync();
        await db.Collection(collection).Document(documentId).SetAsync(data!);
    }

    public async Task<FirebaseToken> VerifyIdTokenAsync(string idToken)
    {
        if (string.IsNullOrWhiteSpace(idToken))
        {
            throw new InvalidOperationException("O token do Firebase nao foi informado.");
        }

        await EnsureFirebaseInitializedAsync();
        return await _auth!.VerifyIdTokenAsync(idToken);
    }

    private async Task<FirestoreDb> GetDbAsync()
    {
        if (_db is not null)
        {
            return _db;
        }

        await EnsureFirebaseInitializedAsync();
        _db = FirestoreDb.Create(GetProjectId());
        return _db;
    }

    private async Task EnsureFirebaseInitializedAsync()
    {
        if (_app is not null)
        {
            return;
        }

        await _initializationLock.WaitAsync();
        try
        {
            if (_app is not null)
            {
                return;
            }

            var projectId = GetProjectId();
            var credential = await LoadCredentialAsync();

            _app = FirebaseApp.Create(new AppOptions
            {
                Credential = credential,
                ProjectId = projectId
            }, $"edumint-ai-{projectId}");

            _auth = FirebaseAuth.GetAuth(_app);
        }
        finally
        {
            _initializationLock.Release();
        }
    }

    private string GetProjectId()
    {
        var projectId = _configuration["Firebase:ProjectId"];
        if (string.IsNullOrWhiteSpace(projectId))
        {
            throw new InvalidOperationException("Firebase:ProjectId nao configurado.");
        }

        return projectId;
    }

    private async Task<GoogleCredential> LoadCredentialAsync()
    {
        var credentialPath = _configuration["Firebase:CredentialPath"];
        if (string.IsNullOrWhiteSpace(credentialPath))
        {
            return await GoogleCredential.GetApplicationDefaultAsync();
        }

        var fullPath = Path.GetFullPath(credentialPath);
        if (!File.Exists(fullPath))
        {
            throw new FileNotFoundException("Arquivo de credenciais do Firebase nao encontrado.", fullPath);
        }

        Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", fullPath);
        return GoogleCredential.FromFile(fullPath);
    }
}
