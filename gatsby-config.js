/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = {
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  siteMetadata: {
    title: `CTools - Ferramentas para o Contador`,
    description: `A CTools desenvolve ferramentas para auxiliar contadores e gestores nas suas atividades do dia a dia, simplificando processos e gerando eficiência com o suo de tecnologia.`,
    author: `@gusflopes`,
  },
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  // ...
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-157787410-2",
        head: false,
        exclude: ["/app/**"],
        pageTransitionDelay: 0,
        // optimizeId: "",
        // experimentId: "",
        // variantId: "",
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "ctools.com.br",
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app2/*`] },
    },
  ],
}
