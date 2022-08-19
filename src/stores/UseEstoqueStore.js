import { defineStore } from "pinia";
import db from "../boot/localBase.js"
export const useEstoqueStore = defineStore("estoque", {
    state: () => ({
        counter: 0,
        produtos: [],
        produto: {
            id: 1,
            nome: 'asdas',
            data: 'asdsas',
            quantidade: 0,
            valor_venda: 0,
            valor_compra: 0,
        },
        venda: {
            id: null,
            nome: '',
            quantidade: 0,
        },
    }),
    getters: {
        doubleCount: (state) => state.counter * 2,
    },
    actions: {
        async postProduto () {
            console.log(111)
            let produto = this.produto
            try{
                const result = await db.db.collection('produtos').add({produto})
                console.log(result)
            }catch(e){
                console.log(e)
            }
        },
    },
});
