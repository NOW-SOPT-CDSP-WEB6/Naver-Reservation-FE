import { css } from '@emotion/react';

export interface BoxStyleProps {
  display?: string;
  flexDirection?: string;
  boxSizing?: string;
  width?: string;
  height?: string;
  margin?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  border?: string;
  borderRadius?: string;
  borderColor?: string;
  boxShadow?: string;
  backgroundColor?: string;
  color?: string;
}

export const getBoxStyle = ({
  display = '',
  width = '',
  height = '',
  margin = '',
  marginTop = '',
  marginLeft = '',
  marginRight = '',
  marginBottom = '',
  padding = '',
  paddingTop = '',
  paddingRight = '',
  paddingBottom = '',
  paddingLeft = '',
  border = '',
  borderRadius = '',
  borderColor = '',
  boxShadow = '',
  backgroundColor = '',
  color = '',
}: BoxStyleProps) =>
  css({
    display,
    width,
    height,
    margin,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    border,
    borderRadius,
    borderColor,
    boxShadow,
    backgroundColor,
    color,
  });
