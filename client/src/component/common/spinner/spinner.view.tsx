import React from 'react';
import {ReactComponent as SpinnerIcon} from '../../../images/icons/spinner.svg';
import {SpinnerContainerStyle} from "./spinner.style";

interface SpinnerViewProps {
  fill?: string;
  width?: number;
  height?: number;
}

const SpinnerView = ({fill = '#2d69e9', width = 60, height = 60}: SpinnerViewProps) => {
  return <SpinnerContainerStyle><SpinnerIcon width={width} height={height} fill={fill}/></SpinnerContainerStyle>
}

export default SpinnerView;
