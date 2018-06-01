# gatsby-starter-landing-page
Starter with the common plugins needed in a [Gatsby](https://www.gatsbyjs.org/) based landing page.

Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-site https://github.com/timojaask/gatsby-starter-landing-page
```

## What's included

- [Google Analytics](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics)

## Required setup

- Insert your Google Analytics tracking ID in `gatsby-config.js`

## Running in development
```
gatsby develop
```

## Google Analytics notes

Configure in `gatsby-config.js`.

To track links that take user away from your site, use `OutboundLink` component.

```javascript
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const MyComponentWithALink = () => 
  <OutboundLink ref="https://www.google.com">
    Link to Google!
  </OutboundLink>
```