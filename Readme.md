# moviequery

It's a great little service for searching the movie db

## Dependencies

To run in docker-compose, it requires docker :D

To run natively, it requires node version 8+

## To Run (docker-compose)

From the project root:

```
docker-compose build

docker-compose up
```

## To Run (native)

Run the server:

```
cd api
npm install
npm run start
```

(in another session) Run the app:

```
cd app
npm install
npm run start
```

### Readers' guide to the repo

#### `/api`

`api` is pretty cut and dry.

- `src` which holds all the source code
- inside `src`, there's
  - `main.js` which builds and runs our server
  - `conf.js` which holds conf properties for the server
  - `db` which holds:
    - `moviedb.js` which contains all fetching logic for the moviedb api
  - `graphql` which holds:
    - `resolvers.js` which are your average graphql resolvers that map queries/mutations to the data
    - `schema.js` which is the graphql schema definition for the service

#### `/app`

`app` is a bit more complex in its organization. 

All code is split into focused domains and subdomains. ex:
  - `/movies/pages`
  - `/movies/components`
  - `/movies/utils`
  - `/movies/graphql`
  - `/nonIdealStates/components`
  - `/nonIdealStates/pages`
  - `/routing/components`

The app's router is found in `src/routing/components/Router`. It's just react-router-dom.
