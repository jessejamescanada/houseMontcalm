import client from '../../client'
import { PortableText } from '@portabletext/react'
import { useRouter } from 'next/router'
import groq from 'groq'
import urlFor from '../../lib/urlFor'
import RichTextComponents from '../../components/RichTextComponents'
import Image from 'next/image'
import HeadSeo from '../../components/HeadSeo'

export const revalidate = 172800

const Post = ({ post }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const { images, name, price, details, body, youtube } = post

  return (
    <>
      <HeadSeo
        title={name}
        description={details}
      />
      <div className='flex flex-col w-4/5 max-w-7xl m-auto'>
        <div className='flex flex-col justify-center m-auto items-center'>
          <h1 className='text-4xl text-center'>{name}</h1>
          <h3 className='text-xl text-center mb-3'>{details}</h3>
          <h3 className='text-md font-semibold mb-3'>Price: {price}</h3>
        </div>
        <div className='flex justify-center lg:justify-start'>
          <PortableText
            value={body}
            components={RichTextComponents}
          />
        </div>
        <div className='flex flex-wrap justify-center items-center lg:justify-evenly'>
          {images &&
            images.map((item) => (
              <div
                key={item}
                className='w-full sm:w-auto'
              >
                <Image
                  src={urlFor(item).url()}
                  alt='image'
                  width={0}
                  height={0}
                  sizes={'40vw'}
                  className='rounded-lg my-1 w-full h-full sm:w-[350px] sm:h-[350px] object-cover'
                />
              </div>
            ))}
        </div>
        {youtube && (
          <div className='mt-10'>
            <iframe
              width='100%'
              height='300'
              src={youtube.url}
              title=''
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </>
  )
}

const query = groq`*[_type == "product" && slug.current == $slug][0]{
  name,
  details,
  price,
  "images": image[].asset->url,
  body,
  "youtube": youtube,
}`

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "product" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params
  const post = await client.fetch(query, { slug })

  return {
    props: {
      post,
    },
  }
}

export default Post
