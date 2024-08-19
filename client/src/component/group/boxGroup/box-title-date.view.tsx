import React from "react";
import BoxRefreshDate, {BoxTitleDateViewProps} from "./box-refresh-date/box-refresh-date";
import BoxTitleView from "../../common/box/box-title.view";
import {ItemTitleDateStyle} from "../../common/box/box.style";


const BoxTitleDateView = ({isLoading, dataLength = 0, ...props}: BoxTitleDateViewProps & {
  isLoading: boolean,
  dataLength?: number
}) => {
  return (
    <ItemTitleDateStyle>
      <BoxTitleView>
        실시간 재난상황전파 메시지 ({dataLength})
        {isLoading && <span className={'loading'}>데이터를 불러오는 중입니다...</span>}
      </BoxTitleView>
      <BoxRefreshDate {...props} />
    </ItemTitleDateStyle>
  );
};

export default BoxTitleDateView;
