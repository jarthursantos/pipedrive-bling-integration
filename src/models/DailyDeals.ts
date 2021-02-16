import { Schema, Document, model } from 'mongoose'

import { Deal } from '~/entities/Deal'

interface DailyDealsDocument extends Document {
  day: Date
  deals: Deal[]
  amountValue: number
}

const dealSchema: Schema = new Schema(
  {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    organization: {
      name: {
        type: String,
        required: true
      }
    },
    createdAt: {
      type: Date,
      required: true
    },
  },
  { _id: false }
)

const dailyDealsSchema: Schema = new Schema(
  {
    day: {
      type: Date,
      required: true
    },
    deals: {
      type: [dealSchema],
      required: true,
      default: []
    },
    amountValue: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    versionKey: false
  }
)

export const DailyDealsSchema = model<DailyDealsDocument>(
  'daily-deals',
  dailyDealsSchema
)
