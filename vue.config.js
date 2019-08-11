module.exports = {
  css: {
    extract: {
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css'
    },
    modules: false,
    sourceMap: true
  },

  productionSourceMap: false,

  publicPath: process.env.NODE_ENV === 'production'
    ? '/wp-content/plugins/xophz-compass/admin/dist/'
    : 'http://localhost:8080/',
  outputDir: './wp-content/plugins/xophz-compass/admin/dist/',

  devServer: {
    proxy: {
      '^/': {
        target: 'http://localhost/',
        ws: false,
        changeOrigin: false
      }
    },
    public: '10.0.0.184:8080'
  },

  configureWebpack: {
    devServer: {
      contentBase: '/wp-content/plugins/xophz-compass/admin/dist/',
      allowedHosts: ['localhost'],
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    externals: {
    },
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js'
    }
  },

  // filenameHashing: false,
  // chainWebpack: config => {
  //   config.plugins.delete('html')
  //   config.plugins.delete('preload')
  //   config.plugins.delete('prefetch')
  // },
  // assetsDir: './wp-content/plugins/xophz-compass/admin/dist/',

  // indexPath: './app.js',
  pages: {
    index: {
      // entry for the page
      entry: 'src/app.js',
      // the source template
      template: '/wp-admin/admin.php?page=xophz-compass',
      // output as dist/index.html
      // filename: 'app.js',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      // title: 'Index Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },

  pluginOptions: {
    browserSync: {
      server: false,
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: '10.0.0.184',
      open: 'external',
      proxy: 'localhost',
      // proxy: 'http://10.0.0.184/',
      port: 8080 // for work mamp,
    }
  }

  // assetsDir: './wp-content/plugins/xophz-compass/assets/'
}
