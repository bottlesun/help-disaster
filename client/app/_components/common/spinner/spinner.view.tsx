import React from "react";
import { SpinnerContainerStyle } from "./spinner.style";
import SvgSpinner from "@/_components/common/svg/SvgSpinner";

interface SpinnerViewProps {
  fill?: string;
  width?: number;
  height?: number;
}

const SpinnerView = ({ fill, width = 60, height = 60 }: SpinnerViewProps) => {
  return (
    <div className={SpinnerContainerStyle}>
      <SvgSpinner fill={fill} width={width} height={height} />
    </div>
  );
};

export default SpinnerView;
