import { Request, Response } from 'express'

import { container } from '~/app/container'
import { ReportDailyDealsModule } from '~/modules/daily-deals/report'

export async function handleGenerateDailyDealsReport(_req: Request, res: Response) {
  const reportDailyDealsModule = container.resolve<ReportDailyDealsModule>('reportDailyDealsModule')

  const report = await reportDailyDealsModule.generate()

  return res.json(report)
}
