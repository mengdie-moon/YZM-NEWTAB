<template>
    <div class="time-container">
        <div class="time">{{ currentTime }}</div>
        <div class="date">{{ currentDate }}</div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')
const currentDate = ref('')

const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

function updateTime() {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    currentTime.value = `${hours}:${minutes}:${seconds}`
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const day = now.getDate()
    const weekDay = weekDays[now.getDay()]
    currentDate.value = `${year}年${month}月${day}日 ${weekDay}`
}

let timer = null

onMounted(() => {
    updateTime()
    timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
    if (timer) {
        clearInterval(timer)
    }
})
</script>

<style scoped>
.time-container {
    color: rgba(255, 255, 255, 0.85);
    text-align: center;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.time {
    font-size: 100px;
    font-weight: bold;
    letter-spacing: 4px;
    margin-bottom: 10px;
}

.date {
    color: rgba(240, 238, 238, 0.7);
    font-size: 27px;
    font-weight: 500;
    letter-spacing: 2px;
}
@media (max-width: 768px) {
    .time {
        font-size: 80px;
    }

    .date {
        font-size: 23px;
    }
}
@media (max-width: 560px) {
    .time {
        font-size: 60px;
    }

    .date {
        font-size: 18px;
    }
}
@media (max-width: 360px) {
    .time {
        font-size: 50px;
    }

    .date {
        font-size: 15px;
    }
}
</style>