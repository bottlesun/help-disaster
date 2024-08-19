import {RowData} from "@type/api.type";
import {
  removeTrailingLastValues,
  removeTrailingValues,
} from "@utils/textFilter";
import React, {ForwardedRef, forwardRef} from "react";
import Scrollbars from "react-custom-scrollbars-2";

import ButtonTopScrollView, {ButtonTopScrollViewProps} from "../buttonGroup/button-top-scroll.view";
import BoxTitleDateView from "./box-title-date.view";
import {BoxTitleDateViewProps} from "./box-refresh-date/box-refresh-date";
import SpinnerView from "../../common/spinner/spinner.view";
import {
  ItemContainerStyle,
  ItemContentStyle, ItemDateStyle, ItemEmptyStyle,
  ItemLocationStyle,
  ItemTextStyle,
  ItemTitleStyle, ItemTopButtonWrapStyle
} from "../../common/box/box.style";
import BoxItemView from "../../common/box/box-item.view";

type BoxContentTitleTextProps = {
  data?: RowData[];
  handleScroll: () => void;
  handleTopScroll: () => void;
  isLoading: boolean;
  dateProps: BoxTitleDateViewProps;
  scrollLocation: number;
} & ButtonTopScrollViewProps;

const BoxContentTitleTextView = forwardRef(({
                                              scrollLocation,
                                              data,
                                              handleScroll,
                                              handleTopScroll,
                                              isLoading,
                                              dateProps
                                            }: BoxContentTitleTextProps, ref: ForwardedRef<Scrollbars>) => {

  return (
    <ItemContainerStyle>
      <BoxTitleDateView {...dateProps} isLoading={isLoading} dataLength={data?.length}/>
      <Scrollbars ref={ref} autoHide universal autoHideTimeout={1000} autoHideDuration={300} autoHeight
                  autoHeightMax={"calc(100vh - 330px)"}
                  onScroll={handleScroll}>
        <ItemContentStyle>
          {data?.length === 0 && <ItemEmptyStyle>보여지는 데이터가 없습니다.</ItemEmptyStyle>}
          {data?.length !== 0 && isLoading && <SpinnerView/>}
          {data?.length !== 0 && data?.map((item: RowData) => {
            return (
              <BoxItemView key={item.md101_sn}>
                <ItemTitleStyle>
                  {removeTrailingLastValues(item.msg)} 발신 메시지
                </ItemTitleStyle>
                <ItemTextStyle>{removeTrailingValues(item.msg)}</ItemTextStyle>
                <ItemLocationStyle>{item.location_name} </ItemLocationStyle>
                <ItemDateStyle>{item.create_date}</ItemDateStyle>
              </BoxItemView>
            );
          })}
        </ItemContentStyle>
      </Scrollbars>
      <ItemTopButtonWrapStyle>
        {
          scrollLocation > 1 && <ButtonTopScrollView handleTopScroll={handleTopScroll}/>
        }
      </ItemTopButtonWrapStyle>
    </ItemContainerStyle>
  );
});

export default BoxContentTitleTextView;
