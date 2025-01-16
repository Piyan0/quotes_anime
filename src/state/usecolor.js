import {ref} from "vue"

const light_color = {
  bg_color: "#F4F4F4",
  card_color: "#FFFFFF",
  name_color: "#828280",
  text_color: "#000000",
  border_color: "#AAC3D9",
  outsidetext_color: "#000000"
}
const dark_color = {
  bg_color: "#13161B",
  card_color: "#1C2431",
  name_color: "#828280",
  text_color: "#FFFFFF",
  border_color: "#2A314B",
  outsidetext_color: "#BEC6CC"
}

var current_color = ref(light_color)
const MODE_LIGHT= 0
const MODE_DARK= 1
var mode= MODE_LIGHT
export function useColor() {
  function update_color() {
    if (mode==MODE_LIGHT){
      current_color.value= dark_color
      mode= MODE_DARK
    }else{
      current_color.value= light_color
      mode= MODE_LIGHT
    }
  }
  return {current_color, update_color}
}
