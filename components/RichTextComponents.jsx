import Link from 'next/link'
import urlFor from '../lib/urlFor'
export const RichTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          className='rounded-lg'
          alt={value.alt || ' '}
          src={urlFor(value).width(420).fit('max').auto('format')}
        />
      )
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className='ml-10 mb-10'>{children}</ul>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li
        className='my-2 text-lg'
        style={{ listStyleType: 'disclosure-closed' }}
      >
        {children}
      </li>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className='text-5xl py-10 font-bold'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-4xl py-10 font-bold'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-3xl py-10 font-bold'>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className='text-2xl py-10 font-bold'>{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className='border-l-[#f7ab0a] border-l-4 pl-5 py-5 my-5'>
        {children}
      </blockquote>
    ),
    marks: {
      // Ex. 1: custom renderer for the em / italics decorator
      em: ({ children }) => (
        <em className='text-gray-600 font-semibold'>{children}</em>
      ),

      // Ex. 2: rendering a custom `link` annotation
      link: ({ children, value }) => {
        const target = (value?.href || '').startsWith('http')
          ? '_blank'
          : undefined
        return (
          <Link
            className='font-bold'
            href={value?.href}
            target={target}
            rel={target === '_blank' && 'noindex nofollow'}
          >
            {children}
          </Link>
        )
      },
    },
  },
}

export default RichTextComponents
