import PaginationView from "./pagination.view";
import {Dispatch} from "react";

export type PaginationProps = {
  total: number,
  page: number,
  setPage: Dispatch<number>,
  limit: number,
}
const Pagination = ({...props}: PaginationProps) => {
  const {total, page, setPage, limit} = props;
  const pageTotal = Math.ceil(total / limit)
  const pageGroup = Math.ceil(page / limit);
  const lastPageGroup = Math.ceil(pageTotal / limit);
  const pageArray = new Array(limit).fill(1).map((_, index) => {
    if (pageGroup === lastPageGroup && index + 1 > pageTotal - (pageGroup - 1) * limit) return;
    return index + 1 + (pageGroup - 1) * limit
  }).filter((item) => item !== undefined);
  const handelPageChange = (pageNo: number) => {
    setPage(pageNo);
  }
  const handelArrowPage = (direction: string | undefined) => {

    switch (direction) {
      case 'prev':
        if (page === 1) return;
        setPage(page - 1);
        break;
      case 'next':
        if (page === total) return;
        setPage(page + 1);
        break;
      case 'first':
        setPage(1);
        break;
      case 'last':
        setPage(pageTotal);
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