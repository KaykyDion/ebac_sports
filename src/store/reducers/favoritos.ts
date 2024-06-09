import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavState = {
  itens: Produto[]
}

const initialState: FavState = {
  itens: []
}

const FavSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarAosFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('O produto já está nos favoritos')
      } else {
        state.itens.push(produto)
      }
    },
    removerDosFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      state.itens = state.itens.filter((p) => p.id !== produto.id)
    }
  }
})

export const { adicionarAosFavoritos, removerDosFavoritos } = FavSlice.actions
export default FavSlice.reducer
