import { defineStore } from "pinia";
export const userInfoStore = defineStore('userInfoStore', {
    state: () => {
        return {
            mobile: '',
            password: '',
            name: '上海欢乐谷',
        }
    },
    actions: {
        SET_mobile(mobile){
            this.mobile = mobile
        },
        SET_password(password){
            this.password = password
        },
        SET_name(name){
            this.name = name
        },
    }
    
})
