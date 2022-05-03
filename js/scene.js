export const SceneAPI = superclass =>
    class extends superclass {
        async setBackgroundColor(sessionId, value, options = {}) {
            const url = this.baseUrl + "scene/background_color";
            const response = await this.patch(url, {
                params: {
                    session_id: sessionId,
                    value: value
                },
                ...options
            });
            return response;
        }

        async setPartsMaterial(sessionId, value, options = {}) {
            const url = this.baseUrl + "scene/parts_material";
            const response = await this.patch(url, {
                params: {
                    session_id: sessionId,
                    value: value
                },
                ...options
            });
            return response;
        }
    };
