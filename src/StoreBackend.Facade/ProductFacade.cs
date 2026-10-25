using StoreBackend.DomainService;
using StoreBackend.Dto;
using StoreBackend.Exceptions;
using StoreBackend.Facade.Mappers;

namespace StoreBackend.Facade;

public class ProductFacade : IProductFacade
{
    private readonly IProductService productService;
    private readonly AppDbContext context;

    public ProductFacade(IProductService productService, AppDbContext context)
    {
        this.productService = productService;
        this.context = context;
    }

    public async Task<ProductDto> AddAsync(ProductDto productDto)
    {
        var entity = await productService.AddAsync(productDto);
        await context.SaveChangesAsync();
        return ProductMapper.ToDto(entity);
    }

    public async Task DeleteAsync(Guid productId)
    {
        await productService.DeleteAsync(productId);
        await context.SaveChangesAsync();
    }

    public async Task<List<ProductDto>> GetAllAsync()
    {
        var entities = await productService.GetAllAsync();
        return ProductMapper.ToDto(entities);
    }

    public async Task<ProductDto> GetByIdAsync(Guid prodcutId)
    {
        var entity = await productService.GetByIsAync(prodcutId);
        if(entity == null) throw new ResourceNotFoundException();
        return ProductMapper.ToDto(entity);
    }
}