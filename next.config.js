module.exports = {
   env: {
      CONF_API_BASE: process.env.CONF_API_BASE,
      CONF_API_STATIC_BASE: process.env.CONF_API_STATIC_BASE,
      CONF_ENV: process.env.CONF_ENV,
      N_ENV: process.env.NODE_ENV,
   },
   images: {
      domains: ['pict1.reezocar.com', 'picsum.photos']
   },
   trailingSlash: true,

   // webpack: (config) => {
   //    config.node = {
   //       fs: 'empty',
   //    };

   //    config.module.rules.push({
   //       test: /\.(css|gif|jpg|jpeg|png|svg)$/,
   //       use: [
   //          {
   //             loader: 'file-loader',
   //             options: {
   //                context: '',
   //                outputPath: 'static',
   //                publicPath: '/_next/static',
   //                name: '[path][name].[ext]?[contenthash]',
   //             },
   //          },
   //       ],
   //    });

   //    return config;
   // },
};
