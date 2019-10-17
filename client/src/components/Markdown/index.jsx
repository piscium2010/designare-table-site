import React from 'react'
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { duotoneLight as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'

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
