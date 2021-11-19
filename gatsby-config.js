module.exports = {
  siteMetadata: {
    description: "Portfolio of Austin Randolph",
    locale: "en",
    title: "Austin Randolph",
    formspreeEndpoint: "https://formspree.io/f/xgergqed",
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