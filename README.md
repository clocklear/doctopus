# doctopus

Apply some order to the chaos that is your paper documents

## getting started with doctopus server (with development)

Start doctopus server with `npm run start`.  You'll also need an accessible redis server (docker is your friend, `docker run redis -p 6379:6379`).  The doctopus server will bind to `0.0.0.0:3000`.  The application is intended to function as a SPA; as such, most of the server functionality is exposed via API endpoints.

### authentication

You'll need admin credentials for most endpoints.  You can set your credentials by running `npm run createadmin` and following the prompts.  After you create an admin, you can login with a `POST /api/user/login` with the following payload:

```json
{
  "username": "admin",
  "password": "mypassword
}
```

This will provide a cookie that will need to provided on all subsequent (authenticated) API requests; otherwise you'll get `401`s.

## server supported api

Still trying to determine the best way to write this up.  Have a look in `/server/api` for ideas.