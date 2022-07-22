const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandleMiddleware = require('./middleware/error-handler')


//middleware
app.use(express.static('./public'))
app.use(express.json())  


//Routes
app.use('/api/V1/tasks', tasks)

app.use(notFound)
app.use(errorHandleMiddleware)

const port = 3000
  const start =  async () => {
      try {
          await connectDB( 'mongodb+srv://dommy:dommy2021@cluster0.wr5fv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
          app.listen(port, console.log(`The server is listening on port ${port}..`))

      } catch (error) {
         console.log(error) 
      }
  }

  start()
