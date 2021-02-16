import { createContainer, asFunction, aliasTo } from 'awilix'

import { createMongoGetAllDailyDealsModule } from '~/modules/daily-deals/get-all/Mongo'
import { createMongoRegisterDailyDealsModule } from '~/modules/daily-deals/register/Mongo'
import { createSystemReportDailyDealsModule } from '~/modules/daily-deals/report/System'
import { createBlingRegisterProductsModule } from '~/modules/products/register/Bling'
import { createBlingRegisterSalesOrderModule } from '~/modules/sales-order/register/Bling'
import { createPipedriveGetAllWonDealsModule } from '~/modules/won-deals/get-all/Pipedrive'
import { createMongoGetNonRegisteredWonDealsModule } from '~/modules/won-deals/get-non-registered/Mongo'
import { createSystemProcessWonDealsModule } from '~/modules/won-deals/process/System'

import { createDateFNSDateParser } from '~/services/DateParser/DateFNS'
import { createDateFNSDayPoints } from '~/services/DayPoints/DateFNS'
import { createAxiosHTTPRequest } from '~/services/HTTPRequest/Axios'
import { createJS2XMLXMLParser } from '~/services/XMLParser/JS2XML'

const container = createContainer({
  injectionMode: 'CLASSIC'
})

container.register({
  // modules
  getAllDailyDealsModule: asFunction(createMongoGetAllDailyDealsModule),
  registerDailyDealsModule: asFunction(createMongoRegisterDailyDealsModule),
  reportDailyDealsModule: asFunction(createSystemReportDailyDealsModule),
  registerProductsModule: asFunction(createBlingRegisterProductsModule),
  registerSalesOrderModule: asFunction(createBlingRegisterSalesOrderModule),
  getAllWonDealsModule: asFunction(createPipedriveGetAllWonDealsModule),
  getNonRegisteredWonDealsModule: asFunction(createMongoGetNonRegisteredWonDealsModule),
  processWonDealsModule: asFunction(createSystemProcessWonDealsModule),

  // services
  dateParser: asFunction(createDateFNSDateParser),
  dayPoints: asFunction(createDateFNSDayPoints),

  httpRequest: asFunction(createAxiosHTTPRequest),
  request: aliasTo('httpRequest'),

  xmlParser: asFunction(createJS2XMLXMLParser),
})

export { container }
