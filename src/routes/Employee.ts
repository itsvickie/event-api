import { Router } from 'express'

const routes = Router()

routes
  .route('/')
  .get(
    (req, res) => {
      res.status(200).send('hello world')
    }
  )

export default routes