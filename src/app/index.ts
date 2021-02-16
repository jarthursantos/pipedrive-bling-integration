import 'express-async-errors'

import cors from 'cors'
import express, { Request, Response, NextFunction } from 'express'
import createHttpError, { isHttpError } from 'http-errors'
import mongoose from 'mongoose'
import logger from 'morgan'

import { URL } from '~/configs/Mongo'

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })

import { routes } from '~/app/routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.use(routes)

app.use((_req, _res, next) => next(createHttpError(404, 'unavailable resource')))

app.use(
  async (error: any, _req: Request, res: Response, next: NextFunction) => {
    if (isHttpError(error)) {
      return res.status(error.statusCode).json({ message: error.message })
    }

    next(error)
  }
)

export { app }
