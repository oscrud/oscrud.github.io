import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock(props) {
    const { snippet } = props
    return (
        <SyntaxHighlighter language="go" style={duotoneDark} showLineNumbers={true}>
            {snippet}
        </SyntaxHighlighter>
    )
}

export default CodeBlock