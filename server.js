const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 3001)

app.locals.resources = [{name: 'resource 1'}, {name: 'Best resource'}, {name: 'resource 3'}]

app.get('/', (request, response) => {
  response.send('You are here')
})

app.get('/api/v1/resources', (request, response) => {
  response.status(200).json( app.locals.resources )
})

app.listen(app.get('port'), () => console.log(`App listening on port ${app.get('port')}!`))