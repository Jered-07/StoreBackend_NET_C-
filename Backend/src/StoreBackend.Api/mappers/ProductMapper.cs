using StoreBackend.Api.Models.Requests;
using StoreBackend.Api.Models.Responses;
using StoreBackend.Dto;

public class ProductMapper
{
    public static ProductDto ToDto(CreateProductRequestModel model)
    {
        return new ProductDto
        {
            ProductResourseId = model.ProductResourseId,
            Name = model.Name
        };
    }

    public static List<ProductResponseModel> ToModel(List<ProductDto> products)
    {
        return products.Select(p => ToModel(p)).ToList();
    }

    public static ProductResponseModel ToModel(ProductDto product)
    {
        return new ProductResponseModel
        {
            ProductResourseId = product.ProductResourseId,
            Name = product.Name
        };
    }
}