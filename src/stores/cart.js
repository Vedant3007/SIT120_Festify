import { defineStore } from 'pinia'


export const useCartStore = defineStore('cart', {

  state: () => ({
    cart: []
  }),


  getters: {

    totalCount: (state) => {
      return state.cart.length
    },


    totalCost: (state) => {
      return state.cart.reduce(
        (total, item) => total + item.price,
        0
      )
    },


    formattedSummary() {
      if (this.cart.length === 0) {
        return 'Your cart is empty.'
      }

      const packageNames = this.cart
        .map(item => item.name)
        .join(', ')

      return `${this.cart.length} package${
        this.cart.length !== 1 ? 's' : ''
      } selected: ${packageNames}. Total: $${this.totalCost}`
    }

  },


  actions: {

    addItem(item) {

      const alreadyExists = this.cart.some(
        cartItem => cartItem.id === item.id
      )

      if (alreadyExists) {
        return
      }

      this.cart.push({
        ...item
      })

    },


    removeItem(itemId) {

      this.cart = this.cart.filter(
        item => item.id !== itemId
      )

    },


    resetStore() {

      this.cart = []

    }

  }

})