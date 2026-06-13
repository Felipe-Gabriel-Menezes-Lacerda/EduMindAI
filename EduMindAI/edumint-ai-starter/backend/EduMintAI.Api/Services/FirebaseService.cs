using System.Collections.Concurrent;
using System.Text.Json;
using Google.Cloud.Firestore;

namespace EduMintAI.Api.Services;

public class FirebaseService
{
    private readonly IConfiguration _configuration;
    private readonly ConcurrentDictionary<string, ConcurrentDictionary<string, string>> _mockCollections = new();
    private readonly JsonSerializerOptions _jsonOptions = new(JsonSerializerDefaults.Web);
    private FirestoreDb? _db;

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

        var db = GetDb();
        await db.Collection(collection).Document(documentId).SetAsync(data!);
    }

    private FirestoreDb GetDb()
    {
        if (_db is not null)
        {
            return _db;
        }

        var projectId = _configuration["Firebase:ProjectId"];
        var credentialPath = _configuration["Firebase:CredentialPath"];

        if (string.IsNullOrWhiteSpace(projectId))
        {
            throw new InvalidOperationException("Firebase:ProjectId não configurado.");
        }

        if (!string.IsNullOrWhiteSpace(credentialPath))
        {
            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", credentialPath);
        }

        _db = FirestoreDb.Create(projectId);
        return _db;
    }
}
