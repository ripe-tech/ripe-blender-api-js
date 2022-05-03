export const RenderAPI = superclass =>
    class extends superclass {
        async render(options = {}) {
            const url = this.baseUrl + "render";

            const params = {};
            if (options.sessionId) params.session_id = options.sessionId;
            if (options.engine) params.engine = options.engine;
            if (options.format) params.format = options.format;
            if (options.videoFormat) params.video_format = options.videoFormat;
            if (options.outputName) params.output_name = options.outputName;
            if (options.writeStill) params.write_still = options.writeStill;
            if (options.animation) params.animation = options.animation;

            const response = await this.post(url, {
                params: params,
                ...options
            });
            return response;
        }
    };
