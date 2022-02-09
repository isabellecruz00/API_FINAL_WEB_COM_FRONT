using System.ComponentModel;

namespace api_rest.Domain.Helpers
{
    public enum EUnitOfPlatform : byte
    {
        [Description("Platform1")]
        Platform1 = 1,

        [Description("Platform2")]
        Platform2 = 2,

        [Description("Platform3")]
        Platform3 = 3,

        [Description("Platform4")]
        Platform4 = 4,

        [Description("AllPlatforms")]
        AllPlatforms = 5
    }

}
