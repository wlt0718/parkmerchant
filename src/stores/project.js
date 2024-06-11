import { defineStore } from "pinia";
export const userMyPorjectStore = defineStore('userMyPorjectStore', {
    state: () => {
        return {
            list: [
                {
                    id: 1,
                    name: '游艇',
                    amount: 40,
                    bili: 10,
                    yongjin: 4,
                    isCheck: false
                },
                {
                    id: 2,
                    name: '摩天轮',
                    amount: 100,
                    bili: 10,
                    yongjin: 10,
                    isCheck: false
                },
                {
                  id: 3,
                  name: '海盗船',
                  amount: 60,
                  bili: 5,
                  yongjin: 3,
                  isCheck: false
                },
                {
                  id: 4,
                  name: '激情冲浪',
                  amount: 80,
                  bili: 10,
                  yongjin: 8,
                  isCheck: false
                },
            ],
        }
    },
    actions: {
        SET_list_del(id){
            const index = this.list.findIndex(el => {
                return el.id === id
            })
            this.list.splice(index, 1)
        },
        SET_list_add(obj){
            this.list.push(obj)
        },
        SET_list_change(obj){
            const index = this.list.findIndex(el => {
                return el.id === obj.id
            })
            this.list.splice(index, 1, obj)
        },
    }
    
})
