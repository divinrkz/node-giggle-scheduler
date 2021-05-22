require('dotenv').config()
const mongoose = require('mongoose')
const { createTask  } = require('./task.scheduler')
const { scheduler } = require('./poll.scheduler')

mongoose.connect('mongodb://localhost:27017/node-giggle-scheduler', { promiseLibrary: global.Promise, useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(async () => {
    const executeOn = new Date()
    executeOn.setSeconds(executeOn.getSeconds() + 5)

    createTask({
      taskType: 'SMS',
      executeOn,
      data: {
        to: 'BOSS',
        message: 'I\'m Still Working'
      }
    }) // submit task to done after 5 sec

    await scheduler() // start the scheduler polling
  })
  .catch(error => {
    console.log('Connection to Database failed..')
  })