import { RowData } from "@type/api.type";
import { handleRemoveAfterBracket, handleRemoveBeforeBracket } from "@utils/textFilter";
import React from "react";
import BoxItemView from "../../atoms/box/box-item.view";
import { ItemContainerStyle, ItemDateStyle, ItemTextStyle, ItemTitleStyle } from "../../atoms/box/box.style";
import BoxTitleDateView from "./box-title-date.view";

type BoxContentTitleTextProps = {
  data: RowData[];
};

const BoxContentTitleTextView = ({ data }: BoxContentTitleTextProps) => {
  return (
    <ItemContainerStyle>
      <BoxTitleDateView />
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
    </ItemContainerStyle>
  );
};

export default BoxContentTitleTextView;
