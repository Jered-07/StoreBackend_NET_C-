using System.ComponentModel.DataAnnotations;

namespace StoreBackend.Api.Models.Requests;

public class CreateProductRequestModel
{
    [Required]
    public Guid ProductResourseId{get; set;}

    [Required]
    [MaxLength(50)]
    public string? Name {get; set;}


}