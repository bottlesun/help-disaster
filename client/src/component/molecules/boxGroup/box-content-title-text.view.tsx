import { RowData } from "@type/api.type";
import { handleRemoveAfterBracket, handleRemoveBeforeBracket } from "@utils/textFilter";
import React, { ForwardedRef, forwardRef } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import BoxItemView from "../../atoms/box/box-item.view";
import {
  ItemContainerStyle,
  ItemDateStyle,
  ItemTextStyle,
  ItemTitleStyle,
  ItemTopButtonWrapStyle
} from "../../atoms/box/box.style";
import ButtonTopScrollView, { ButtonTopScrollViewProps } from "../buttonGroup/button-top-scroll.view";
import BoxTitleDateView  from "./box-title-date.view";
import {BoxTitleDateViewProps} from "./box-refresh-date/box-refresh-date";

type BoxContentTitleTextProps = {
  data: RowData[];
  handleScroll: () => void;
  handleTopScroll: () => void;
  isLoadingInitialData: boolean;
  dateProps: BoxTitleDateViewProps;
  scrollLocation: number;
} & ButtonTopScrollViewProps;

const BoxContentTitleTextView = forwardRef(({ scrollLocation,data, handleScroll, handleTopScroll, isLoadingInitialData ,dateProps}: BoxContentTitleTextProps, ref: ForwardedRef<Scrollbars>) => {

  return (
    <ItemContainerStyle>
      <BoxTitleDateView {...dateProps} />
      <Scrollbars ref={ref} autoHide universal autoHideTimeout={1000} autoHideDuration={300} autoHeight autoHeightMax={"580px"} onScroll={handleScroll}>
        {isLoadingInitialData &&
          Array.from([1, 2, 3, 4]).map((_, index) => {
            return <BoxItemView key={index} />;
          })}
        {data.map((item: RowData) => {
          return (
            <BoxItemView key={item.md101_sn}>
              <ItemTitleStyle>
                <span>{handleRemoveAfterBracket(item.msg, "]")}</span>
                {item.location_name}
              </ItemTitleStyle>
              <ItemTextStyle>{handleRemoveBeforeBracket(item.msg, "]", "vo")}</ItemTextStyle>
              <ItemDateStyle>{item.create_date}</ItemDateStyle>
            </BoxItemView>
          );
        })}
      </Scrollbars>
      <ItemTopButtonWrapStyle>
        {
          scrollLocation > 1 && <ButtonTopScrollView handleTopScroll={handleTopScroll} />
        }
      </ItemTopButtonWrapStyle>
    </ItemContainerStyle>
  );
});

export default BoxContentTitleTextView;
