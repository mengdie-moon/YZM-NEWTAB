<template>
    <div class="t-r-moreBtn">
        <div class="morebtnBox">
            <button @click="toggleMore()" class="more-button" title="更多设置" aria-label="更多设置">
                <img src="../assets/common/more.svg" alt="">
            </button>
        </div>
    </div>
    <transition name="menu-fade">
        <div class="t-r-moreMenu" v-if="isShowMore">
        <!-- <div class="t-r-moreMenu"> -->
            <div class="t-m-menu-left">
                <div class="t-m-menu-l-user">
                    <img src="../assets/common/avator.jpeg" alt="">
                </div>
                <div class="t-m-menu-l-items">
                    <div class="t-m-menu-l-item" :class="{ active: activeIndex === index }"
                        v-for="(item, index) in moreLeft" :key="index" @click="handleMenuClick(index)">
                        <div class="t-m-menu-l-item-icon">
                            <img :src="item.icon" alt="">
                        </div>
                        <div class="t-m-menu-l-item-name">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="t-m-menu-right">
                最近一次更新：2026/06/28 15：57
                <br>
                7.9放暑假！下周回来完成设置
                <br>
                <a style="text-decoration: none;color: aqua;" href="http://newtab.linghantech.top/">YZM-NEWTAB<->在线体验</a>
                <br>
                By: Mengdie-moon
            </div>
        </div>
    </transition>
    <Msg ref="msgRef" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Msg from '../components/msg.vue'
import CommonIcon from '../assets/common/s-common.svg'
import PenIcon from '../assets/common/s-pen.svg'
import SearchIcon from '../assets/common/s-search.svg'
const isShowMore = ref(false)
const msgRef = ref(null)
const activeIndex = ref(0)
const moreLeft = [
    {
        id: 0,
        name: '常规',
        icon: CommonIcon
    },
    {
        id: 1,
        name: '搜索',
        icon: SearchIcon
    },
    {
        id: 2,
        name: '个性',
        icon: PenIcon
    }
]
function showMessage(message, type = 'info', duration = 3000) {
    if (msgRef.value) {
        msgRef.value.addMessage(message, type, duration)
    }
}
function handleMsgClose(id) {
    return 'ok'
}
function toggleMore() {
    isShowMore.value = !isShowMore.value
    // showMessage('🔥速制作ing~', 'info')
}

function handleMenuClick(index) {
    activeIndex.value = index
}
</script>

<style scoped>
.t-r-moreBtn {
    position: fixed;
    top: 23px;
    right: 23px;
    display: flex;
    align-items: center;
    z-index: 999;
    padding: 5px;
}

.morebtnBox {
    padding: 10px;
}

.more-button {
    border: none;
    background: #3a3a3a33;
    border-radius: 50px;
    backdrop-filter: blur(15px);
    /* width: 60px;
    height: 50px; */
    padding: 10px;
}

.more-button img {
    padding: 5px;
    filter: saturate(150%);
    transition: all 0.3s ease;
}

.more-button img:hover {
    transform: scale(1.5);
}

.t-r-moreMenu {
    z-index: 9999;
    position: absolute;
    display: flex;
    align-items: center;
    top: 50%;
    left: 50%;
    width: 80%;
    padding: 20px;
    max-width: 1000px;
    height: auto;
    transform: translate(-50%, -50%);
    min-width: 180px;
    background-color: #0000004d;
    filter: saturate(150%);
    /* filter: saturate(15000000000000000000000000000000000000000000000%); */
    -webkit-backdrop-filter: blur(15px) saturate(1.2);
    backdrop-filter: blur(15px) saturate(1.2);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
    overflow: hidden;

}

.t-m-menu-left {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.t-m-menu-l-user img {
    border-radius: 10px;
    overflow: hidden;
    width: 50px;
    height: 50px;
}

.t-m-menu-l-items {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.t-m-menu-l-item {
    border-radius: 15px;
    transition: all 0. 4s ease;
    cursor: pointer;
    display: flex;
    margin: 5px;
    align-items: center;
    /* flex-direction: row; */
    color: #FFFFFF;
    padding: 10px;
}

.t-m-menu-l-item.active {
    background: rgba(255, 255, 255, 0.1);
}

.t-m-menu-l-item:hover {
    background: rgba(255, 255, 255, 0.2);
}

.t-m-menu-l-item-name {
    letter-spacing: 1.5px;
    margin-left: 10px;
}

.t-m-menu-l-item-icon {
    display: flex;
    align-items: center;
}

.t-m-menu-l-item-icon img {
    width: 20px;
    height: 20px;
}

/* 临时样式 */
.t-m-menu-right{
    text-align: center;
    flex: 1;
    color: #FFFFFF;
}

.menu-fade-enter-active,
.menu-fade-leave-active {
    transition: all 0.3s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9);
}

.menu-fade-enter-to,
.menu-fade-leave-from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
}
</style>
