// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
// const withTM = require('next-transpile-modules')(["monaco-editor"])

// module.exports = withTM({
//     webpack: (config) => {
//         config.module.rules.push({
//             test: /\.worker\.js$/,
//             use: { loader: "worker-loader" },
//         })

//         config.module.rules.push({
//             test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//             use: {
//                 loader: 'url-loader',
//                 options: {
//                     limit: 100000,
//                 },
//             },
//         })

//         const rule = config.module.rules
//             .find(rule => rule.oneOf)
//             .oneOf.find(r => r.issuer && r.issuer.include && r.issuer.include.includes("_app"));

//         if (rule) {
//             rule.issuer.include = [
//                 rule.issuer.include,
//                 /[\\/]node_modules[\\/]monaco-editor[\\/]/
//             ]
//         }

//         config.plugins.push(
//             new MonacoWebpackPlugin({
//                 languages: ['javascript'],
//                 filename: "static/[name].worker.js"
//             })
//         )

//         return config
//     },
// })