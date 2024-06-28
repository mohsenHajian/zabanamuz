// Import the function from the API file
import createAdminRepository from '../api/admin-repository';

// Define the plugin
export default {
    install(app) {
        // Create repositories and make them available globally
        const repositoriesData = {
            getMoviesApi: createAdminRepository('/api/client/movies')
        };

        // Make repositories available globally
        app.provide('repositories', repositoriesData);
    }
};
