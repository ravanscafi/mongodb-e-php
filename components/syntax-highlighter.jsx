import React from 'react'
import BaseSyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark'
import javascript from 'react-syntax-highlighter/languages/prism/javascript'
import bash from 'react-syntax-highlighter/languages/prism/bash'
import php from 'react-syntax-highlighter/languages/prism/php'

registerLanguage('javascript', javascript)
registerLanguage('bash', bash)
registerLanguage('php', php)

const SyntaxHighlighter = ({language, children}) => {
  return <BaseSyntaxHighlighter language={language} style={atomDark}>
    {children}
  </BaseSyntaxHighlighter>
}

export default SyntaxHighlighter
