import { API as BaseAPI, mix, load, conf } from "yonius";

import { LoadAPI } from "./load";
import { RenderAPI } from "./render";
import { SceneAPI } from "./scene";

const BASE_URL = "http://localhost:8080/api/";

export class API extends mix(BaseAPI).with(LoadAPI, RenderAPI, SceneAPI) {
    constructor(kwargs = {}) {
        super(kwargs);
        this.baseUrl = conf("RIPE_BLENDER_BASE_URL", BASE_URL);
        this.token = conf("RIPE_BLENDER_TOKEN", null);
        this.baseUrl = kwargs.baseUrl === undefined ? this.baseUrl : kwargs.baseUrl;
        this.token = kwargs.token === undefined ? this.token : kwargs.token;
    }

    static async load() {
        await load();
    }

    async build(method, url, options = {}) {
        await super.build(method, url, options);
        options.headers = options.params !== undefined ? options.headers : {};
        options.kwargs = options.kwargs !== undefined ? options.kwargs : {};
        const auth = options.kwargs.auth === undefined ? true : options.kwargs.auth;
        delete options.kwargs.auth;
        if (auth && this.token) {
            options.headers.Authorization = `Bearer ${this.token}`;
        }
    }
}
