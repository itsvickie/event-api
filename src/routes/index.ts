import { Router } from 'express'
import Employee from './Employee'

const routes = Router()

routes.use(Employee)

export default routes
