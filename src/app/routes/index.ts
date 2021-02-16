import { Router } from 'express'

import { handleGenerateDailyDealsReport } from '~/app/controllers/daily-deals'
import { handleProcessWonDeals } from '~/app/controllers/won-deals'

const routes = Router()

routes.get('/', handleProcessWonDeals)
routes.get('/report', handleGenerateDailyDealsReport)

export { routes }
