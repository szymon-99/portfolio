const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

const getPortfolioData = async () => {
  try {
    const { items } = await client.getEntries()
    return items
  } catch (error) {
    console.log(error)
  }
}

export { getPortfolioData }
