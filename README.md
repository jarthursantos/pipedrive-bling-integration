<!-- people@linkapi.com.br -->
# Pipedrive + Bling
Integrate [CRM Pipedrive API](https://www.pipedrive.com/) with [ERP Bling API](https://www.bling.com.br/) using [NodeJS](https://www.nodejs.org/) picking won deals from [Pipedrive](https://www.pipedrive.com) and creating Sales Orders in [Bling](https://www.bling.com.br/) from them generation daily sales report

## Getting Started

### Environment

- Setup a complete [NodeJS](https://www.nodejs.org/) development environment

- Copy `.env.example` to `.env` file
  - Unix you can execute this in root directory `cp .env.example .env`

- Create [Pipedrive](https://www.pipedrive.com) trial account
  - Get Pipedrive `API_KEY`
  - Put `API_KEY` inside `.env` on `PIPEDRIVE_API_KEY` field
  - Put choose `Company Name` inside `.env` on `PIPEDRIVE_API_URL` field

- Create [Bling](https://www.bling.com.br/) trial account
  - Create API User and get `API_KEY`
  - Put `API_KEY` inside `.env` on `BLING_API_KEY` field

- Setup Mongo Database URL in `.env` on `MONGO_URL`

- If prefer, change execution `PORT` in `.env`

### Development

- `yarn dev` or `npm run dev`

### Production

- `yarn build` or `npm run build`
- `yarn start` or `npm run start`