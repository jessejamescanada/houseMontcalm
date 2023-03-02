import sanityClient from '@sanity/client'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export default sanityClient({
  projectId, // you can find this in sanity.json
  dataset,
  apiVersion, // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
})
