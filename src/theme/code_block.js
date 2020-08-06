import React, { useEffect, useState } from 'react'

import useThemeContext from '@theme/hooks/useThemeContext'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark, duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock(props) {
    const { isDarkTheme } = useThemeContext()
    const { snippet } = props
    return (
        <SyntaxHighlighter language="go" style={isDarkTheme ? duotoneDark : duotoneLight} showLineNumbers={true}>
            {snippet}
        </SyntaxHighlighter>
    )
}

export default CodeBlock