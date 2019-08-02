# spotifyNext
spotify next is an app that uses react, and the spotify web api to connect to spotify and make calls to the api to get user playlist data and search spotify for artists, albums, and tracks.

## Installation

1. Install npm modules: `cd react-next npm i`
2. Start webpack dev sever: `npm start`
3. Your app should now be running on [localhost:8080](http://localhost:8080/).


## Deploying to Heroku

```
npm run build
heroku create
git push heroku master
heroku open
```

## Built With

* [React](https://reactjs.org/) - For UI views and client side routing
* [Next](https://github.com/zeit/next.js) - Next.js for server side rendering
* [Node](https://nodejs.org/en/) - For server
* [Webpack](https://webpack.js.org/) - For dependency bundling
* [Express](https://expressjs.com/) - Node server framework
* [Bootstrap 4](https://v4-alpha.getbootstrap.com/) - For styling
* [Spotify Web API](https://beta.developer.spotify.com/) - Spotify Web API
