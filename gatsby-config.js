require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: "My Shop",
    description: "MDB React starter for material design landing page",
    author: "Ahmed Jadli"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN }
    }
  ]
};
