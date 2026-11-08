using StoreBackend.Api.Models.Requests;
using StoreBackend.Api.Models.Responses;
using StoreBackend.Dto;

public class UserMapper
{
    public static UserDto ToDto(CreateUserRequestModel model)
    {
        return new UserDto
        {
            UserResourceId = model.UserResourceId,
            Name = model.Name,
            Age = model.Age!.Value
        };
    }

    public static List<UserResponseModel> ToModel(List<UserDto> users)
    {
        return users.Select(u => ToModel(u)).ToList();
    }

    public static UserResponseModel ToModel(UserDto user)
    {
        return new UserResponseModel
        {
            UserResourceId = user.UserResourceId,
            Name = user.Name,
            Age = user.Age
        };
    }
}
