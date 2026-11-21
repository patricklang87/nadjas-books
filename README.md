<h1 align="center">Nadja's Books</h1>

<p align="center">This is a landing page for an imaginary cafe and bookshop. My goal was to make a stylistically attractive, though subtle, layout using CSS. The page includes a carousel (written from scratch in JS) and an embedded location map from OpenStreetMap.org.</p>

## Links

- [Live site](https://patricklang87.github.io/nadjas-books/)
- [Repo](https://github.com/patricklang87/nadjas-books/)

## Run the project

```bash
npm install
npm start
```

The site opens at http://localhost:3000. It uses Create React App 4, so on Node 17+ `npm start` and `npm run build` need `NODE_OPTIONS=--openssl-legacy-provider`.

To publish to GitHub Pages:

```bash
npm run deploy
```

## Run the tests

```bash
npm test
```

React Testing Library tests cover:
- every navigation link points to a section that exists on the page
- the responsive navigation (full bar on wide screens, hamburger menu on narrow screens that closes after picking a link)
- the news carousel (auto-advances every 6 seconds, wraps around, and jumps to an item from its scroller button)
- the demo contact form's thank-you state

Tests run on every push and pull request via GitHub Actions.

## Built with

- JavaScript
- HTML
- CSS
- React
- Node
- NPM
- Jest, React Testing Library

## 3rd Party APIs

- Embedded Map from OpenStreetMap.org

## Possible Future Updates

- [ ] Backend to enable "Contact Us" form. 
 
## Author

**Patrick Lang**

- [Profile](https://github.com/patricklang87 "Patrick Lang")
- [Email](mailto:patricklang87@gmail.com?subject=NadjasCafe "Nadjas Cafe")


