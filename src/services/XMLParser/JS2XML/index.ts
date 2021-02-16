import { parse } from 'js2xmlparser'

import { XMLParser } from '../index'

export function createJS2XMLXMLParser(): XMLParser {
  return {
    fromJSON(root: string, value: object): string {
      return parse(root, value)
    }
  }
}
