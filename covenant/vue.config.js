// vue.config.js
module.exports = {
    // options...
    devServer: {
        proxy: {
            '/': {
                target: 'https://aws1.covn.in/covid_service/web/api/',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/': '/'
                }
            }
        }
    }
};