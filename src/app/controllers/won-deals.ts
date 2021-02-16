import { Request, Response } from 'express'

import { container } from '~/app/container'
import { ProcessWonDealsModule } from '~/modules/won-deals/process'

export async function handleProcessWonDeals(_req: Request, res: Response) {
  const processWonDeasModule = container.resolve<ProcessWonDealsModule>('processWonDealsModule')

  await processWonDeasModule.process()

  return res.sendStatus(204)
}
