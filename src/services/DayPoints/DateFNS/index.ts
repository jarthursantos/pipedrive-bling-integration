import { startOfDay, endOfDay } from 'date-fns'

import { DayPoints } from '../index'

export function createDateFNSDayPoints(): DayPoints {
  return { startOfDay, endOfDay }
}
