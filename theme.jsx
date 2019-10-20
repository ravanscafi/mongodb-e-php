import React from 'react'
import theme from 'mdx-deck/themes'
import { lobsbter } from 'mdx-deck/themes'

import useFullscreenKeys from './components/use-fullscreen-keys'

const Provider = ({ children, index, metadata }) => {
    return <>
        {useFullscreenKeys(index)}
        {children}
    </>
}

export default {
  ...theme,
  ...lobsbter,
  Provider
}
