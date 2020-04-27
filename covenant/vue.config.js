// vue.config.js
module.exports = {
    // options...
    devServer: {
        proxy: {
            '/': {
                target: 'http://blockchain.eastus.cloudapp.azure.com:8080/covid_service',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/': '/'
                }
            }
        }
    }
};