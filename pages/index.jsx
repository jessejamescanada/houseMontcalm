import Head from 'next/head'
import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import urlFor from '../lib/urlFor'
import Image from 'next/image'
import Banner from '../components/Banner'
import Services from '../components/Services'
import { motion } from 'framer-motion'

export const revalidate = 60

export default function Home({ post }) {
  return (
    <>
      <Head>
        <title>Montcalm Property Management</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Banner />
      <main className='max-w-7xl m-auto'>
        <div
          className='w-full'
          id='properties'
        >
          <h2 className={`text-center text-4xl my-6 font-serif`}>
            Featured Properties
          </h2>
          <div className=' justify-center pb-14 mx-0 md:items-center md:flex-wrap md:flex md:mx-20 md:justify-evenly'>
            {post.length > 0 &&
              post.map(
                ({ _id, name, image, slug = post }) =>
                  slug && (
                    <motion.li
                      initial={{ opacity: 0 }}
                      transition={{
                        delay: 0.2,
                        duration: 0.5,
                      }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      key={_id}
                      className='list-none my-5'
                    >
                      <Link
                        href={`/post/${encodeURIComponent(slug.current)}`}
                        className='pointer'
                      >
                        <Image
                          src={urlFor(image[0]).url()}
                          alt='image'
                          width={0}
                          height={0}
                          sizes={'30vw'}
                          className='w-full  rounded-lg shadow-lg sm:w-[250px] sm:h-[auto]'
                        />
                        <div
                          className={`text-center mt-3 mx-auto font-semibold w-[200px] text-xl text-[#616161]`}
                        >
                          {name}
                        </div>
                      </Link>
                    </motion.li>
                  )
              )}
          </div>
        </div>
        <Services />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const post = await client.fetch(groq`
    *[_type == "product" && _createdAt < now()] | order(_createdAt desc)
  `)

  return {
    props: {
      post,
    },
  }
}