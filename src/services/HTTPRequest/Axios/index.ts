import axios from 'axios'

import { HTTPRequest, HTTPRequestOptions } from '../index'

export function createAxiosHTTPRequest(): HTTPRequest {
  return {
    async get<Result>(path: string, options: HTTPRequestOptions = {}): Promise<Result> {
      const { data } = await axios.get<Result>(path, { params: options.query })

      return data
    },

    async post<Result>(path: string, body: any = {}, options: HTTPRequestOptions = {}): Promise<Result> {
      const { data } = await axios.post<Result>(path, body, { params: options.query })

      return data
    }
  }
}
