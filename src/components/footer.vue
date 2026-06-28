<template>
    <p class="copyright">© {{ getCurrentYear() }} YZM-NEWTab. <br /> <span class="sentence">{{ stence }}</span></p>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { get } from '../utils/request'
const stence = ref('')
const getStence = async () => {
    const res = await get('https://v1.hitokoto.cn/')
    console.log(res)
    stence.value = `${res.hitokoto}——${res.from ? res.from : res.from_who}`
}
const getCurrentYear = () => {
    return new Date().getFullYear()
}

onMounted(() => {
    getStence()
})
</script>

<style scoped>

.copyright, .sentence {
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
    margin: 0;
}

.copyright:hover {
    color: rgba(255, 255, 255, 0.8);
}
</style>
