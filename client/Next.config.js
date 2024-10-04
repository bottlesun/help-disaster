// next.config.js
module.exports = {
  reactStrictMode: true, // React의 Strict Mode를 활성화
  swcMinify: true, // SWC를 사용한 코드 압축 활성화 (Next.js 12 이상)
  images: {
    domains: [""], // 외부 도메인의 이미지를 허용
  },
  env: {
    API_KEY: process.env.API_KEY, // 환경 변수 설정
    BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  },
  async redirects() {
    return [
      // {
      //   source: `https://www.safetydata.go.kr/V2/api/DSSP-IF-00247?serviceKey=${this.env.API_KEY}&:query*`, // 리다이렉트할 경로
      //   destination: "/api/disaster",
      //   permanent: true, // 영구적인 리다이렉트
      // },
    ];
  },
};
