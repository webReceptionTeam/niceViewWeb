import { ref } from "vue";

export function useAvater(){
    let circleUrl = ref('images/default-avater.png')
    return {
        circleUrl
    }
}