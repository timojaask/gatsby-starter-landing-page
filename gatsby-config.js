module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // INSERT YOUR GA TRACKING ID HERE
        trackingId: "XX-XXXXXXXXX-X",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          // INSERT THE FONTS YOU WANT TO USE
          `lato\:400,700`
        ]
      }
    },
  ],
};