import { RowData } from "@type/api.type";
import { handleRemoveAfterBracket, handleRemoveBeforeBracket } from "@utils/textFilter";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import BoxItemView from "../../atoms/box/box-item.view";
import { ItemContainerStyle, ItemDateStyle, ItemTextStyle, ItemTitleStyle } from "../../atoms/box/box.style";
import ButtonTopScrollView from "../buttonGroup/button-top-scroll.view";
import BoxTitleDateView from "./box-title-date.view";

type BoxContentTitleTextProps = {
  data: RowData[];
  handleScroll: (e: React.UIEvent<HTMLElement>) => void;
  isLoadingInitialData: boolean;
};

const BoxContentTitleTextView = ({ data, handleScroll, isLoadingInitialData }: BoxContentTitleTextProps) => {
  return (
    <ItemContainerStyle>
      <BoxTitleDateView />
      <Scrollbars autoHide universal autoHideTimeout={1000} autoHideDuration={300} autoHeight autoHeightMax={"580px"} onScroll={(e) => handleScroll(e)}>
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
      <ButtonTopScrollView />
    </ItemContainerStyle>
  );
};

export default BoxContentTitleTextView;
