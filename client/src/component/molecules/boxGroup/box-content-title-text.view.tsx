import { handleRemoveAfterBracket, handleRemoveBeforeBracket } from "@utils/textFilter";
import React from "react";
import BoxItemView from "../../atoms/box/box-item.view";
import { ItemContainerStyle, ItemDateStyle, ItemTextStyle, ItemTitleStyle } from "../../atoms/box/box.style";

const BoxContentTitleTextView = ({ data }: any) => {
  return (
    <ItemContainerStyle>
      {data.map((item: any) => {
        return (
          <BoxItemView key={item.location_id}>
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
