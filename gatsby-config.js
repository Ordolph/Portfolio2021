module.exports = {
  siteMetadata: {
    description: "Portfolio of Austin Randolph",
    locale: "en",
    title: "Austin Randolph",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "dark-green",
      },
    },
  ],
}