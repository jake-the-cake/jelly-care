import express from 'express'
import cors from 'cors'

const APP = express()

APP.use(cors())

APP.get('/', (req,res) => {
  res.send('sup')
})

APP.listen(5500, () => {
  console.log('Server is rnning.')
})