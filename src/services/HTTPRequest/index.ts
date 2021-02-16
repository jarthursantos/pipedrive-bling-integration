export interface Query {
  [key: string]: string | number
}

export interface HTTPRequestOptions {
  query?: Query
}

export interface HTTPRequest {
  get<Result = {}>(route: string, options?: HTTPRequestOptions): Promise<Result>
  post<Result = {}>(route: string, body?: any, options?: HTTPRequestOptions): Promise<Result>
}
