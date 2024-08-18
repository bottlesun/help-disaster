import {RowData} from "@type/api.type";
import {
  removeTrailingLastValues,
  removeTrailingValues,
} from "@utils/textFilter";
import React, {ForwardedRef, forwardRef} from "react";
import Scrollbars from "react-custom-scrollbars-2";
import BoxItemView from "../../atoms/box/box-item.view";
import {
  ItemContainerStyle, ItemContentStyle,
  ItemDateStyle, ItemLocationStyle,
  ItemTextStyle,
  ItemTitleStyle,
  ItemTopButtonWrapStyle
} from "../../atoms/box/box.style";
import ButtonTopScrollView, {ButtonTopScrollViewProps} from "../buttonGroup/button-top-scroll.view";
import BoxTitleDateView from "./box-title-date.view";
import {BoxTitleDateViewProps} from "./box-refresh-date/box-refresh-date";
import SpinnerView from "../../atoms/spinner/spinner.view";

type BoxContentTitleTextProps = {
  data: RowData[];
  handleScroll: () => void;
  handleTopScroll: () => void;
  isLoadingInitialData: boolean;
  dateProps: BoxTitleDateViewProps;
  scrollLocation: number;
} & ButtonTopScrollViewProps;

const BoxContentTitleTextView = forwardRef(({
                                              scrollLocation,
                                              data,
                                              handleScroll,
                                              handleTopScroll,
                                              isLoadingInitialData,
                                              dateProps
                                            }: BoxContentTitleTextProps, ref: ForwardedRef<Scrollbars>) => {

  return (
    <ItemContainerStyle>
      <BoxTitleDateView {...dateProps} />
      <Scrollbars ref={ref} autoHide universal autoHideTimeout={1000} autoHideDuration={300} autoHeight
                  autoHeightMax={"60vh"} onScroll={handleScroll}>
        <ItemContentStyle>
          {isLoadingInitialData && <SpinnerView/>}
          {data.map((item: RowData) => {
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
