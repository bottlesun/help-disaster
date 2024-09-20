//app/setupProxy.js
const msgKey = process.env.REACT_APP_API_KEY;
const msgUrl = process.env.REACT_APP_API_URL;
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:4000",
      changeOrigin: true
    })
  );
  app.use(
    "/api2",
    createProxyMiddleware({
      target: `https://www.safetydata.go.kr`,
      changeOrigin: true,
      pathRewrite: (path, req) => {
        // 쿼리 문자열을 분리합니다.
        const queryString = req.url.split("?")[1]; // "pageNo=1&numOfRows=8"

        // 새로운 경로를 구성합니다.
        return `/V2/api/DSSP-IF-00247?serviceKey=${msgKey}&${queryString}`;
      }
    })
  );
};
