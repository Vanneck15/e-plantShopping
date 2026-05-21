import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialise les éléments comme un tableau vide
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      // Vérifie si l'article existe déjà dans le panier
      const existingItem = state.items.find(item => item.name === name);
      
      if (existingItem) {
        // Si l'article existe, on augmente sa quantité
        existingItem.quantity += 1;
      } else {
        // S'il n'existe pas, on l'ajoute avec une quantité initiale de 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // Supprime l'article en filtrant le tableau par le nom reçu dans action.payload
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        // Met à jour la quantité avec la nouvelle valeur reçue
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;