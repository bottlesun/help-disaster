import PaginationView from "./pagination.view";
import {Dispatch} from "react";

export type PaginationProps = {
  total: number,
  pageNo: number,
  setPageNo: Dispatch<number>,
  limit: number,
}
const Pagination = ({...props}: PaginationProps) => {
  const {total, pageNo, setPageNo, limit} = props;
  const pageTotal = Math.ceil(total / limit)
  const pageGroup = Math.ceil(pageNo / limit);
  const lastPageGroup = Math.ceil(pageTotal / limit);
  const pageArray = new Array(limit).fill(1).map((_, index) => {
    if (pageGroup === lastPageGroup && index + 1 > pageTotal - (pageGroup - 1) * limit) return;
    return index + 1 + (pageGroup - 1) * limit
  }).filter((item) => item !== undefined);
  const handelPageChange = (pageNo: number) => {
    setPageNo(pageNo);
  }
  const handelArrowPage = (direction: string | undefined) => {

    switch (direction) {
      case 'prev':
        if (pageNo === 1) return;
        setPageNo(pageNo - 1);
        break;
      case 'next':
        if (pageNo === total) return;
        setPageNo(pageNo + 1);
        break;
      case 'first':
        setPageNo(1);
        break;
      case 'last':
        setPageNo(pageTotal);
        break;
      default:
        break;
    }
  }


  const paginationProps = {
    ...props,
    pageTotal: pageTotal,
    pageArray: pageArray,
    handelPageChange: handelPageChange,
    handelArrowPage: handelArrowPage
  }
  return <PaginationView {...paginationProps} />
}
export default Pagination;