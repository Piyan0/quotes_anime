<template>
  <div :style="{'background-color': color.bg_color}" class="body">
    <div class="container alen jen pore">
      <div  v-if="image_finished == false" style="min-height: 100%; min-width: 100%" class="bg-light force-center posa top-left zi-1">
        <img width="54" src="res/load.svg" alt="" />
      </div>
      <div style="min-height: 100vh" class="fol jen alen">
        <Card v-if="is_fetching== false" @image_loaded="finish" :quotes_data="{en: quotes_data.quotes_en, id: quotes_data.quotes_idn}" :character_name="quotes_data.character_name" :image="quotes_data.image.value"></Card>
        <p :style="{color: color.outsidetext_color}" class="f-8 my-3">Piyan Apriyanto@2025</p>
      </div>
    </div>
  </div>
</template>
<!-- -->

<script setup>
  import {onMounted, ref} from "vue"
  import axios from "axios"
  import Card from "./components/card.vue"
  import {useColor} from "@/state/usecolor.js"
  
  var is_fetching= ref(true)
  var image_finished = ref(false)

  const {current_color: color} = useColor()
  var quotes_data = {
    character_name: ref("piyan"),
    quotes_idn: ref("bahasa indonesia"),
    quotes_en: ref("bahasa ingggris"),
    image: ref("https://www.dropbox.com/scl/fi/aczpfe9tmud5ehgtc3s42/zoro.jpg?rlkey=b9wu47bwdmydm0xk39nju4nsj&st=c0mvzxgf&raw=1")
  }

  function finish() {
    image_finished.value = true
  }
  async function _ready() {
    axios.get("https://api-quotes-anime.vercel.app/").then(data => {
      quotes_data.character_name.value = data.data.character_name
      quotes_data.quotes_idn.value = data.data.quotes_idn
      quotes_data.quotes_en.value = data.data.quotes_en
      quotes_data.image.value = data.data.image_link
      is_fetching.value= false
    })
  }

  onMounted(() => _ready())
</script>
<!-- -->

<style scoped></style>
