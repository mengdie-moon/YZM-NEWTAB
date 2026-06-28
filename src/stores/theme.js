import { defineStore } from 'pinia'
export const useThemeStore = defineStore('theme', {
    state: ()=>{
        return {
            DatkTheme: 'false'
        }
    },
    persist: true,
    actions: {
        toggleTheme(){
            this.DatkTheme = !this.DatkTheme
        }
    }
})