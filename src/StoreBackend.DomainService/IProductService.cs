using StoreBackend.Domain.Entities;
using StoreBackend.Dto;

namespace StoreBackend.DomainService;

public interface IProductService
{
    Task<List<Product>> GetAllAsync();
    Task<Product?> GetByIsAync(Guid productId);
    Task<Product> AddAsync(ProductDto productDto);
    Task DeleteAsync(Guid productId);
}
