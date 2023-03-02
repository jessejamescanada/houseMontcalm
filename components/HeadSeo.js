import Head from 'next/head'

const HeadSeo = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='description'
        content={description}
      />
    </Head>
  )
}

export default HeadSeo
