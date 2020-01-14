# Deploying API to Heroku

Green Spaces is split at the root level between client and server.  This is done to split logic and concerns.

## Using a subroot folder for deployment

To deploy an app on Heroku, the app must be in the root folder (or at least a package.json file must be available)

To work around this, I used the `git subtree` function on the command line.

`git subtree --prefix server heroku master`

This basically uses `server` as the root of the project and push that to Heroku for deployment.

## Configuring Adonis for deployment

I also need to install the Adonis ClI locally as I had it installed globally.

`npm install --save @adonisjs/cli`

Heroku looks at the npm start script so I added that in the package.json file as `adonis serve`

## Using MySQL with Heroku

Using AdonisJs and MySQL took some additional configuration.

### ClearDB Addon on Heroku

Heroku doesn't support MySQL out of the box so I had to install an addon, ClearDB.

After installation, go to `settings` then `config vars` in heroku.

You should see `CLEARDB_DATABASE_URL` with a mysql prefixed url already present

Add `DB_CONNECTION` as a key with a value of `mysql`

### Configuring ClearDB in Adonis

In the AdonisJs project, a few changes needed to be made.

First, I need to parse the `CLEARDB_DATABASE_URL` var for use in the Adonis database connection config file.

I used an npm package `url-parse` for this.

`npm install --save url-parse`

In `config/database.js` set references at the top for the parser and the cleardb database url

```
const Url = require('url-parse')
const CLEARDB_DATABASE_URL = new Url(Env.get('CLEARDB_DATABASE_URL'))
```

In the MySQL area, replace the existing connection object with:

```
connection: {
  host: Env.get('DB_HOST', CLEARDB_DATABASE_URL.host),
  port: Env.get('DB_PORT', ''),
  user: Env.get('DB_USER', CLEARDB_DATABASE_URL.username),
  password: Env.get('DB_PASSWORD', CLEARDB_DATABASE_URL.password),
  database: Env.get('DB_DATABASE', CLEARDB_DATABASE_URL.pathname.substr(1))
}
```

## Create a Procfile

Heroku uses a Procfile to determine which commands to run when starting the app

Create a file named `Procfile` (no extension) in the server folder and paste the following:

```
release: ENV_SILENT=true node ace migration:run --force
web: ENV_SILENT=true npm start
```

Note:  I replaced the migration command with `adonis migration:refresh --seed --force`

## Deployment 

Now I can deploy the app from the console by using `git subtree push --prefix server heroku master`

## Conclusion

After completing the above steps, the app should be deployed successfully to Heroku
