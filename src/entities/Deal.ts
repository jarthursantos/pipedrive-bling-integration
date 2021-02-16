import { Organization } from '~/entities/Organization'

export interface Deal {
  id: string
  title: string
  value: number
  organization: Organization
  createdAt: Date
}
