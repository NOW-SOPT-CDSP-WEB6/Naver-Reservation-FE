import { Theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const stepperWrapper = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '4px 104px 0 110px'
})

export const stepStyle = (active: boolean) => css({
  width: '28px',
  height: '28px',
  padding: '5px',

  borderRadius: '50%',
  border: `1.2px solid ${Theme.color.lowLightGray}`,
  backgroundColor: active ? Theme.color.naverBlue : Theme.color.white,
})

export const lineStyle = css({
  width: '38.5px',
  height: 0,

  strokeWidth: '1.2px',
})
export const detailWrapper = css({
  display: 'flex',
  justifyContent: 'space-between',

  padding: '6px 97px 3px 108px',

  fontSize: '12px',
  fontWeight: 500,
})

export const detailStyle = (active: boolean) => css({
  color: active ? Theme.color.naverBlue : Theme.color.darkgray,
})