import { ItemEmpty } from "@/_components/common/box/box.style";
import React from "react";

const BoxEmpty = () => {
  return (
    <div className={ItemEmpty}>
      <span className={"loading"}>보여지는 데이터가 없습니다.</span>
    </div>
  );
};

export default BoxEmpty;
