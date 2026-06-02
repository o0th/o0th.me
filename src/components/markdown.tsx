import ReactMarkdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }]]}
      components={{
        code({ children, className }) {
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <SyntaxHighlighter
              PreTag="div"
              language={match[1]}
              style={vscDarkPlus}
              showLineNumbers
              customStyle={{
                background: 'transparent',
                padding: 0,
                margin: 0
              }}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className}>
              {children}
            </code>
          )
        },
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
