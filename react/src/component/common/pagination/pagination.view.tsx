import { PaginationButtonStyle, PaginationContainerStyle } from "./pagination.style";
import { BiChevronLeft, BiChevronRight, BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { PaginationProps } from "./pagination";

export type PaginationViewProps = {
  pageArray: (undefined | number)[];
  pageTotal: number;
  handelPageChange: (pageNo: number) => void;
  handelArrowPage: (direction: string | undefined) => void;
} & PaginationProps;
const PaginationView = ({ ...props }: PaginationViewProps) => {
  const { pageArray, pageTotal, handelArrowPage, page, handelPageChange } = props;
  return (
    <PaginationContainerStyle>
      <PaginationButtonStyle onClick={() => handelArrowPage("first")}>
        <BiChevronsLeft />
      </PaginationButtonStyle>

      {page !== 1 && (
        <PaginationButtonStyle onClick={() => handelArrowPage("prev")}>
          <BiChevronLeft />
        </PaginationButtonStyle>
      )}
      {pageArray.map((item, index) => {
        return (
          <PaginationButtonStyle className={page === item ? "active" : ""} onClick={() => handelPageChange(item as number)} key={index}>
            {item}
          </PaginationButtonStyle>
        );
      })}
      {page !== pageTotal && (
        <PaginationButtonStyle onClick={() => handelArrowPage("next")}>
          <BiChevronRight />
        </PaginationButtonStyle>
      )}
      <PaginationButtonStyle onClick={() => handelArrowPage("last")}>
        <BiChevronsRight />
      </PaginationButtonStyle>
    </PaginationContainerStyle>
  );
};

export default PaginationView;
