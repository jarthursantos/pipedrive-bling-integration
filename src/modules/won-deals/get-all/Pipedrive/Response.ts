export interface PipedriveGetAllWonDealsResponse {
  success: boolean
  data: RawDeal[]
}

export interface RawDeal {
  id: string
  title: string
  value: number

  org_id: RawOrganization

  add_time: string
}

export interface RawOrganization {
  name: string
}
