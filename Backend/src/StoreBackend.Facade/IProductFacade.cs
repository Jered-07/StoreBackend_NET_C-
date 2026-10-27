using StoreBackend.Dto;

namespace StoreBackend.Facade;

public interface IProductFacade
{
    Task<List<ProductDto>> GetAllAsync();
    Task<ProductDto> GetByIdAsync(Guid prodcutId);
    Task<ProductDto> AddAsync(ProductDto productDto);
    Task DeleteAsync(Guid productId);
}
