const client = require('contentful').createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
