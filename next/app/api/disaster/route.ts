// app/api/disaster/route.js
import axios from "axios";
import { DisasterMessageParameter } from "@/_types/disaster-message.api.type";

export async function GET({
  query,
}: {
  query: Omit<DisasterMessageParameter, "numOfRows">;
}) {
  const url = `${process.env.NEXT_PUBLIC_MAIN_API_URL}`;

  try {
    // Axios로 외부 API에 대한 프록시 요청
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        serviceKey: process.env.NEXT_PUBLIC_API_KEY,
        numOfRows: 10,
        ...query, // query 객체의 값들을 URL 파라미터로 추가
      },
    });

    // API 응답을 그대로 클라이언트로 반환
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Response(
        JSON.stringify({
          error: "Failed to fetch data",
          details: error.message,
        }),
        {
          status: error.response?.status || 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    } else {
      if (error instanceof Error) {
        return new Response(
          JSON.stringify({
            error: "Unexpected error",
            details: error.message,
          }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
    }
  }
}
