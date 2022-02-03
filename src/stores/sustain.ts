import {defineStore } from 'pinia'

export interface Data {
    id: string
    title: string
    desc: string
}

interface State {
    data: Data[]
}

export const useSustainStore = defineStore('sustainStore', {
    state: (): State => ({
        data: [
            {
                id: '01',
                title: 'Zero Water',
                desc: 'The average pair of sneakers needs 2,257 gallons of water during production. Thanks to 3D knitting, 3D printing, and hand-molding, the amount we need is zero.'
            },
            {
                id: '02',
                title: 'Zero Waste',
                desc: 'We print and knit our shoes as they are ordered, with no scrap or offcuts in the process. No excess inventories or waste.'
            },
            {
                id: '03',
                title: 'TOTALLY RECYCLABLE',
                desc: "Our sneakers are made to be broken down and reused. When you’re done with your pair, email us at info@snkrs.com with your order number. We'll send you a shipping label to send them in for recycling and give you 20% off your next order."
            },
            {
                id: '04',
                title: 'BREAK & REMAKE',
                desc: "To create sneakers without leaving any waste behind, we actively source plastic bottles collected from the ocean to turn into thread, putting about eight bottles worth of rPET into every pair of shoes."
            },
            {
                id: '05',
                title: '3D KNITTED',
                desc: "Through intricate 3D knitting, we turn recycled plastic threads into comfortable, flexible sneakers without creating any waste. It’s a process that’s both unorthodox and uncompromising."
            },
            {
                id: '06',
                title: '3D PRINTED',
                desc: "By printing our midsoles, we use less energy than a typical sneaker manufacturer. Combined with our water and waste savings, we’re building the future of sneaker production."
            }
        ]
    })
})