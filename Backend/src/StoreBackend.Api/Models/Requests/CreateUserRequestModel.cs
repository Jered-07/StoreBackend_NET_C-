using System.ComponentModel.DataAnnotations;

namespace StoreBackend.Api.Models.Requests;

public class CreateUserRequestModel
{
    [Required]
    public Guid UserResourceId{get; set;}

    [Required]
    [MaxLength(100)]
    public string? Name {get; set;}

    [Required]
    [Range(1, 120)]
    public int? Age {get; set;}
}
