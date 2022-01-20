import { defineStore } from 'pinia'
import axios from 'axios'

export interface Product {
    id: string
    name: string
    price: number
    sizes: string
    colors: string
    detail: string
    imgurl: string
    category: string
    created_at?: string
    updated_at?: string
}


interface State {
    products: Product[]
}

export const useProductsStore = defineStore('productsStore', {
    state: (): State => ({
        products: [
            
        ]
    }),
    actions: {
        async fetchAllProducts(){
            try {
                await axios.get('http://127.0.0.1:8000/products')
                .then(res => res.data)
                .then(data => {
                    this.products = data.data
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
})
