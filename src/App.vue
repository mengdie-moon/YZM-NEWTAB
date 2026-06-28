<template>
  <div class="yzm-box">
    <header class="header">
      <Header />
    </header>
    <main class="main">
      <div class="time-box">
        <TimeDisplay />
      </div>
      <div class="search-box">
        <Search />
      </div>
    </main>
    <footer class="footer">
      <Footer />
    </footer>
    <Msg ref="msgRef" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { get } from './utils/request'
import TimeDisplay from './components/time.vue'
import Search from './components/search.vue'
import Footer from './components/footer.vue'
import Header from './components/header.vue'
import Msg from './components/msg.vue'

const bingBg = ref('')
const msgRef = ref(null)

async function getBingBg() {
  // const res = await get('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=1&n=1&mkt=zh-CN')
  // const imageUrl = `https://cn.bing.com/${res.images[0].url}`
  // bingBg.value = `url(${imageUrl})`
}

function showMessage(message, type = 'info', duration = 3000) {
  if (msgRef.value) {
    msgRef.value.addMessage(message, type, duration)
  }
}

function handleMsgClose(id) {
  return 'ok'
}

onMounted(() => {
  getBingBg()
})
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  tap-highlight-color: transparent;
  -webkit-tap-highlight-color: transparent;
}

.yzm-box {
  overflow: hidden;
  background-image: url('./assets/image.png');
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: blur(0px);
  opacity: 1;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 60px);
}

.time-box {
  padding: 20px;
}

.footer {
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}
</style>
