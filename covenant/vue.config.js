// vue.config.js
module.exports = {
    // options...
    devServer: {
        proxy: {
            '/': {
                target: 'https://aws1.covn.in/',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/': '/'
                }
            }
        }
    }
};