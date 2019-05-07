// module.exports = {
//     baseUrl: "././",
// }

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '././'
      : '/'
  }