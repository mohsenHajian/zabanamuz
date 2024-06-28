import axios from 'axios';
import qs from 'qs';
let baseUrl = import.meta.env.VITE_API_URL;

export default (resource) => ({
    // <<----------------------- getMovies ----------------------->>

    async getMovies(filters, search, page = 1, paginate = 10) {
        let params = {
            paginate
        };
        if (filters) {
            params['filters'] = filters;
        }
        if (page) {
            params['page'] = page;
        }
        if (search) {
            params['search'] = search;
        }
        const response = await axios.get(baseUrl + resource, {
            params: params,
            paramsSerializer: (params) => qs.stringify(params, { encode: false })
        });

        return response.data;
    },
    async getMovie(id) {
        const response = await axios.get(baseUrl + resource + `/${id}`);
        return response.data;
    },

    async getMovieSequence(id) {
        const response = await axios.get(baseUrl + resource + `/${id}/sequences`);
        return response.data;
    }
});
