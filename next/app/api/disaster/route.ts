// app/api/disaster/route.js
import { DisasterMessageParameter } from "@/_types/disaster-message.api.type";
import { NextResponse } from "next/server";
import { axiosDisasterInstance } from "@/api/_utils/axios.instance";
import { ResponseErrorHandler } from "@/api/_utils/response.handler";

export async function GET({
  query,
}: {
  query: Omit<DisasterMessageParameter, "numOfRows">;
}) {
  try {
    // Axios로 외부 API에 대한 프록시 요청
    const response = await axiosDisasterInstance({
      method: "GET",
      params: {
        serviceKey: process.env.NEXT_PUBLIC_API_KEY,
        numOfRows: 10,
        ...query, // query 객체의 값들을 URL 파라미터로 추가
      },
    });

    // API 응답을 그대로 클라이언트로 반환
    const data = response.data;
    // API 응답을 그대로 클라이언트로 반환

    if (response.data.header.resultCode !== "00") {
      throw new Error(response.data.header.errorMsg);
    }

    return NextResponse.json({
      status: 200,
      success: true,
      data: data.body,
      totalCount: data.header.totalCount,
    });
  } catch (error: unknown | NextResponse) {
    return ResponseErrorHandler(error);
  }
}
