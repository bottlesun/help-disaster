//src/setupProxy.js
const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3080",
      changeOrigin: true,
    })
  );
  app.use(
    "/api2",
    createProxyMiddleware({
      target: 'https://apis.data.go.kr/1741000/DisasterMsg5',
      changeOrigin: true,
    })
  );
};
