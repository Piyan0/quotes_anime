<template>
  <div :style="{'background-color': color.bg_color}" class="body">
    <div class="container alen jen">
      <div style="min-height: 100vh" class="fol jen alen">
        <Card :quotes_data="{en: quotes_data.quotes_en, id: quotes_data.quotes_idn}" :character_name="quotes_data.character_name" :image="quotes_data.image.value"></Card>
        <p :style="{color: color.outsidetext_color}" class="f-8 my-3">Piyan Apriyanto@2025</p>
      </div>
    </div>

    <!--<img :src="image_path" alt="">
<div add_.value_to_this :style="{'background-image': `url(${test_object.image_path})`}"style="width: 60px; height: 60px" class="bg-img d"></div> -->
  </div>
</template>
<!-- -->

<script setup>
  import {onMounted, ref} from "vue"
  import axios from "axios"
  import Card from "./components/card.vue"
  import {useColor} from "@/state/usecolor.js"
  

  // TEST
  //strange_1: acces the ref value from test_object.image_path, doesn't working for img tag nor background-image.
  //we have to test_object.image_path.value... strange for real.
  const test_object = {
    image_path: ref("res/icon.jpg")
  }
  //however, this works without adding .value,
  //conclusion: wherever you want to access something ref inside object, be sure to add .value, though the issue only happen on img tag and background-image
  const image_path = ref("res/icon.jpg")
  //

  const {current_color: color} = useColor()
  var quotes_data = {
    character_name: ref("piyan"),
    quotes_idn: ref("bahasa indonesia"),
    quotes_en: ref("bahasa ingggris"),
    image: ref("https://www.dropbox.com/scl/fi/aczpfe9tmud5ehgtc3s42/zoro.jpg?rlkey=b9wu47bwdmydm0xk39nju4nsj&st=c0mvzxgf&raw=1")
  }

  async function _ready() {
    axios.get("https://api-quotes-anime.vercel.app/").then(data => {
      quotes_data.character_name.value = data.data.character_name
      quotes_data.quotes_idn.value = data.data.quotes_idn
      quotes_data.quotes_en.value = data.data.quotes_en
      quotes_data.image.value = data.data.image_link
    })
  }

  onMounted(() => _ready())
</script>
<!-- -->

<style scoped></style>
