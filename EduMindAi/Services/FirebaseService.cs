using Google.Cloud.Firestore;

namespace EduMindAi.Services;

public class FirebaseService
{
    private readonly IConfiguration _configuration;
    private FirestoreDb? _firestoreDb;

    public FirebaseService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task<FirestoreDb> GetFirestoreDbAsync()
    {
        if (_firestoreDb is not null)
        {
            return _firestoreDb;
        }

        var projectId = _configuration["Firebase:ProjectId"];
        if (string.IsNullOrWhiteSpace(projectId))
        {
            throw new InvalidOperationException("A configuracao 'Firebase:ProjectId' nao foi informada.");
        }

        var credentialsPath = _configuration["Firebase:CredentialsPath"];
        if (!string.IsNullOrWhiteSpace(credentialsPath))
        {
            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", credentialsPath);
        }

        _firestoreDb = await FirestoreDb.CreateAsync(projectId);
        return _firestoreDb;
    }
}
