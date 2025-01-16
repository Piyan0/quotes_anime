<template>
  <div :style="{'background-color': color.card_color, color: color.text_color, 'border-bottom': `2px solid ${color.border_color}`}" style="max-width: 400px; min-width: 200px" class="gap-2 p-4 rounded-2">
    <div class="fol gap-1 jen alen">
      <UseImage style="width: 60px; height: 60px; border: 1px solid gray" :src="props.image" class=" rounded-1">
        <template #loading>
          <div style="width: 60px; height: 60px" class="force-center">
            <img width="32" src="res/load.svg" alt="" />
          </div>
        </template>
      </UseImage>

      <p :style="{color: color.name_color}" class="f-8">Anime Quotes</p>
    </div>
    <div class="fow text-center my-2">
      <div class="f-18 flex-grow-1">{{ quote }}</div>
    </div>
    <div class="fow justify-content-end my-2 px-2">
      <p :style="{color: color.name_color}" class="f-12">- {{ character_name }}</p>
    </div>
    <div class="f-12 fow jen gap-1">
      <img class="love_active" width="14px" src="res/love.svg" alt="" />
      <p class="fw-bold">999</p>
    </div>
    <div class="fow gap-2 justify-content-end">
      <img class="dark" @click="set_text()" width="17" src="res/language.svg" alt="" />
      <img class="dark" @click="update_color()" width="17" src="res/color_mode.svg" alt="" />
    </div>
  </div>
</template>
<!-- -->

<script setup>
  import {ref, onMounted} from "vue"
  import {UseImage} from "@vueuse/components"
  import {useColor} from "@/state/usecolor.js"
  const emits= defineEmits(['anjay_mabar'])
  const props = defineProps(["quotes_data", "image", "character_name"])

  const {current_color: color, update_color} = useColor()

  var quotes = {
    en: "English language",
    id: "Indonesian language"
  }
  var current_language = "id"
  var quote = ref(quotes[current_language])

  function set_text(language = null) {
    if (language != null) {
      current_language = language
      quote.value = quotes[current_language]
      return
    }
    if (current_language == "id") {
      current_language = "en"
    } else {
      current_language = "id"
    }
    quote.value = quotes[current_language]
  }
  
  onMounted(() => {
    quotes = props.quotes_data
    set_text("id")
  })
</script>

<!-- -->

<style scoped>
  .love_active {
    filter: brightness(0) saturate(100%) invert(16%) sepia(96%) saturate(5568%) hue-rotate(357deg) brightness(89%) contrast(96%);
  }
  .love_inactive {
    filter: brightness(0) saturate(100%) invert(48%) sepia(2%) saturate(596%) hue-rotate(240deg) brightness(92%) contrast(87%);
  }
  .dark {
    background-color: transparent;
    filter: brightness(0) saturate(100%) invert(7%) sepia(7%) saturate(1489%) hue-rotate(179deg) brightness(99%) contrast(97%);
  }
</style>
