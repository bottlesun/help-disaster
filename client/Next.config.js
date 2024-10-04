// next.config.js
module.exports = {
  reactStrictMode: true, // React의 Strict Mode를 활성화
  swcMinify: true, // SWC를 사용한 코드 압축 활성화 (Next.js 12 이상)
  images: {
    domains: [""], // 외부 도메인의 이미지를 허용
  },
  env: {
    API_KEY: process.env.API_KEY, // 환경 변수 설정
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  },
  /*
async redirects() {
  return [
    {
      source: `/api/DSSP-IF-00247?serviceKey=${process.env.NEXT_PUBLIC_API_KEY}&:query*`, // 수정된 리다이렉트 경로
      destination: "/api/disaster",
      permanent: true, // 영구적인 리다이렉트
    },
  ];
},
*/
};
