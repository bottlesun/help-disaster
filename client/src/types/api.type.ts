export type DataTypes = {
  head: {
    totalCount: number;
  } & HeadData;

  row: RowData[];
};

export type RowData = {
  create_date: string;
  location_id: string;
  location_name: string;
  md101_sn: string;
  msg: string;
  send_platform: string;
};

type HeadData = PageData & resultData[];

type PageData = {
  numOfRows: string;
  pageNo: string;
  type: string;
};

type resultData = {
  resultCode: string;
  resultMsg: string;
};
