import { BsFillCaretUpFill } from "react-icons/bs";
import React from "react";
import { ItemTopButton } from "@/_components/common/box/box.style";

interface BoxBottomTopButtonProps {
  onClick: () => void;
}

const BoxBottomTopButton = ({ onClick }: BoxBottomTopButtonProps) => {
  return (
    <button className={ItemTopButton} onClick={onClick}>
      <BsFillCaretUpFill />
      <p>Top</p>
    </button>
  );
};

export default BoxBottomTopButton;
