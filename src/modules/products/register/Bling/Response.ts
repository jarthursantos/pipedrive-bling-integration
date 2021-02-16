export interface BlingRegisterProductResponse {
  retorno: {
    produtos: {
      produto: {
        id: number
        descricao: string
        preco: string
      }
    }[][]
  }
}
