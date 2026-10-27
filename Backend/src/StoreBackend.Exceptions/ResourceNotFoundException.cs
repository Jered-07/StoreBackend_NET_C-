namespace StoreBackend.Exceptions;

public class ResourceNotFoundException: Exception
{
 public ResourceNotFoundException(): base("Resource no found")
    {
    }

    public ResourceNotFoundException(string message): base(message)
    {
    }
}
