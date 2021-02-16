import { parseISO } from 'date-fns'

import { DateParser } from "../index";

export function createDateFNSDateParser(): DateParser {
  return {
    fromString(value: string): Date {
      return parseISO(value)
    }
  }
}
