module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // TODO: INSERT YOUR GA TRACKING ID HERE
        trackingId: "XX-XXXXXXXXX-X",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false,
      },
    },
  ],
};