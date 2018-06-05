# gatsby-starter-landing-page
Starter with the common plugins needed in a [Gatsby](https://www.gatsbyjs.org/) based landing page.

Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-site https://github.com/timojaask/gatsby-starter-landing-page
```

## What's included

- [Google Analytics](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics)
- [Google Fonts](https://github.com/didierfranc/gatsby-plugin-google-fonts)

## Required setup

- Insert your Google Analytics tracking ID in `gatsby-config.js`
- Choose which Google fonts you want to include in `gatsby-config.js`
- Add an OG image and setup meta tags in `html.js`

## Running in development
```
gatsby develop
```

## Google Analytics

Configure in `gatsby-config.js`.

To track links that take user away from your site, use `OutboundLink` component.

```javascript
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const MyComponentWithALink = () => 
  <OutboundLink href="https://www.google.com">
    Link to Google!
  </OutboundLink>
```

## Google Fonts

Add fonts you want to use in `gatsby-config.js`:
```javascript
{
  resolve: `gatsby-plugin-google-fonts`,
  options: {
    fonts: [
      // INSERT THE FONTS YOU WANT TO USE
      `lato\:400,700`
    ]
  }
},
```

Then use them in CSS:
```css
body {
  font-family: 'Lato';
}
```

See available fonts at [Google Fonts website](https://fonts.google.com).

## Using images

Place an image somewhere inside the `src` folder. Then, use a relative path to access it:

In JS:
```javascript
import logo from "./logo.png";

const MyComponentWithAnImage = () => 
  <div>
    <img src={logo} alt="Logo" />
  </div>
```

In CSS:
```css
.container {
  background-image: url(./logo.png);
}
```

## Meta tags

Adjust your meta tags in `html.js`. Make sure to configure the following lines:

```javascript
import ogImage from "./og-image.png";

const metaTitle = "Site title"
const metaDescription = "About this website"
const metaUrl = "https://www.siteurl.com"
const metaOgImage = `${metaUrl}${ogImage}`
const metaOgType = "website"
```