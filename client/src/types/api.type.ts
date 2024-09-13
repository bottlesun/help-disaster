export type DisasterMessageResponse = {
  header: {
    totalCount: number;
  } & HeadData;

  body: DisasterMessageData[];
};

interface DisasterMessageParameter {
  numOfRows: number; // 한 페이지 결과 수
  pageNo: number; // 페이지 번호
  crtDt?: string; // 조회시작일자
  rgnNm?: string; // 지역명
}

export type DisasterMessageData = {
  SN: string; // 일련번호
  CRT_DT: string; // 생성일시
  MSG_CN: string; // 메시지내용
  RCPTN_RGN_NM: string; // 수신지역명
  EMRG_STEP_NM: string; // 긴급단계명
  DST_SE_NM: string; // 재난구분명
  REG_YMD: string; // 등록일자
  MDFCN_YMD: string; // 수정일자
};

type HeadData = DisasterMessageParameter & headerData;

type headerData = {
  resultCode: string;
  resultMsg: string;
  errorMsg: string | null;
};
