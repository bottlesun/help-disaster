import {PaginationButtonStyle, PaginationContainerStyle} from "./pagination.style";
import {Dispatch} from "react";
import { BiChevronRight,BiChevronLeft,BiChevronsRight,BiChevronsLeft } from "react-icons/bi";
import {PaginationProps} from "./pagination";

export type PaginationViewProps = {
  pageArray: (undefined|number)[],
  pageTotal: number,
  handelPageChange: (pageNo:number) => void,
  handelArrowPage: (direction:string | undefined) => void,

} & PaginationProps
const PaginationView = ({...props}: PaginationViewProps) => {
  const {pageArray,pageTotal,handelArrowPage,limit,pageNo,handelPageChange} = props;
  return <PaginationContainerStyle>
    <PaginationButtonStyle onClick={()=>handelArrowPage('first')}><BiChevronsLeft/></PaginationButtonStyle>

    {
      pageNo !== 1 && <PaginationButtonStyle onClick={()=>handelArrowPage('prev')}><BiChevronLeft/></PaginationButtonStyle>

    }
    {
      pageArray.map((item, index) => {
        return <PaginationButtonStyle className={pageNo === item ? 'active' : '' } onClick={()=>handelPageChange(item as number)} key={index}>{item}</PaginationButtonStyle>
      })
    }
    {
      pageNo !== pageTotal && <PaginationButtonStyle onClick={()=>handelArrowPage('next')}><BiChevronRight/></PaginationButtonStyle>
    }
    <PaginationButtonStyle onClick={()=>handelArrowPage('last')}><BiChevronsRight/></PaginationButtonStyle>

  </PaginationContainerStyle>;
};

export default PaginationView;
