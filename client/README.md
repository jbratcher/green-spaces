## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Deploy to Github Pages  

From the githubPagesConfig branch: 
```
npm run build:gh-pages
npm run generate:gh-pages
git add .
git commit -m "commit message"
npm run deploy
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
