import React from "react";
import { BsFillCaretUpFill } from "react-icons/bs";
import {TopButtonStyle} from "../../common/button/button.style";

export type ButtonTopScrollViewProps = {
  handleTopScroll: (e: React.UIEvent<HTMLElement>) => void;
};
const ButtonTopScrollView = ({ handleTopScroll }: ButtonTopScrollViewProps) => {
  return (
    <TopButtonStyle onClick={handleTopScroll}>
      <BsFillCaretUpFill />
      Top
    </TopButtonStyle>
  );
};
export default ButtonTopScrollView;
