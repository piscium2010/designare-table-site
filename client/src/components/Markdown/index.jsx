import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-light"
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/duotone-light'

SyntaxHighlighter.registerLanguage('jsx', jsx)

export default class Markdown extends React.Component {

  static defaultProps = {
    md: ''
  }

  render() {
    return (
      <div className='markdown' style={{ position: 'relative' }}>
        <SyntaxHighlighter language='jsx' style={theme}>{this.props.md}</SyntaxHighlighter>
      </div>
    )
  }
}
