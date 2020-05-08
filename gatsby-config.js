require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: "EL KHEDAR",
    description: "Gatsby server-less Ecommerce store EL-KHEDAR",
    author: "Ahmed Jadli",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
  ],
};
