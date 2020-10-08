module.exports = mode => ({

    mode,

    devServer: {
        contentBase: 'dist',
        compress: true,
        host: '0.0.0.0',
        port: 49033
    },

    output: {
        library: 'idb',
        libraryExport: 'default',
        filename: 'idb.js'
    },

    devtool: 'source-map'

})
