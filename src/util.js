import React from 'react'
import isMobile from 'ismobilejs'

export function noop() {

}

export const setStyle = (elem, styleProperty, value) => {
  if (elem && typeof elem.style === 'object') {
    elem.style[styleProperty] = value
  }
}

export const isMobileDevice = () => {
  return isMobile.any
}
