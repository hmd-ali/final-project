import { defineStore } from 'pinia'

export interface Item {
    id: string
    price: number
    name: string
    image: string
}

export type IsToggled = boolean

interface State {
    items: Item[],
    isToggled: IsToggled
}

export const useCartStore = defineStore('main', {
    state: (): State => ({
        items: [

        ],
        isToggled: false
    }),
    actions: {
        addItem(item: Item) {
            this.items.push(item)
        },
        removeItem(id: string) {
            this.items = this.items.filter(item => item.id != id)
        },
        getItems(){
            return this.items
        },
        openCartModal(){
            this.isToggled = true
        },
        closeCartModal(){
            this.isToggled = false
        }

    }
})