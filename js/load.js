export const LoadAPI = superclass =>
    class extends superclass {
        async loadFile(file, options = {}) {
            const url = this.baseUrl + "load";
            const response = await this.post(url, {
                params: {
                    file: file
                },
                ...options
            });
            return response;
        }
    };
