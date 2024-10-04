import { NextResponse } from "next/server";

export function ResponseErrorHandler(error: unknown | NextResponse) {
  if (error instanceof Error) {
    // 오류가 Error 객체일 경우에만 처리
    return NextResponse.json({
      status: 500,
      success: false,
      errorMessages: error.message,
    });
  }
  return NextResponse.json({
    status: 500,
    success: false,
    errorMessages: "알 수 없는 오류가 발생했습니다.",
  });
}
