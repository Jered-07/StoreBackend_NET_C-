using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StoreBackend.Domain.Entities;

[Table("User")]
public class User
{
    [Key] //atributos
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int UserId { get; private set; }

    [Required]
    [Column("UserResourceId")]
    public Guid UserResourceId { get; set; }

    [Required]
    [Column("Name")]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [Column("Age")]
    public int Age { get; set; }
}
