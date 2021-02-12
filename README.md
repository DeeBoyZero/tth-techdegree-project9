# tth-techdegree-project9
## By Mathieu Desilets

### Express API using Sequelize + Sqlite with basic authentication

### Techno used
- Javascript
- Nodejs
- Express
- Sequelize
- SQLite3
- Bcrypt
- Basic-Auth

### Extra Credit infos

- Validate that the user's email is valid and unique before creating the user.
- Filter out some columns on the user routes.
- Checks on error's name to see if it is a SequelizeUniqueConstraintError and throw a 400 status code.
- Filter out some columns on the course routes.
- Check to see if the authenticated user is the owner of the course before updating/deleting it and throw a 403 Forbidden if he is not.