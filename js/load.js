export const LoadAPI = superclass =>
    class extends superclass {
        async loadFile(file, options = {}) {
            const url = this.invoicingBaseUrl + "load";
            const response = await this.get(url, {
                params: {
                    file: file
                },
                ...options
            });
            return response;
        }
    };
