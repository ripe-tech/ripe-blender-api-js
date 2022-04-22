const assert = require("assert");
const ripeBlender = require("../..");

describe("API", function() {
    it("should be able to instantiate the API", async () => {
        const api = new ripeBlender.API({
            baseUrl: "https://ripe-blender.platforme.com",
            token: "token"
        });
        assert.strictEqual(api.baseUrl, "https://ripe-blender.platforme.com");
        assert.strictEqual(api.token, "token");
    });
});
