import { ref } from "vue";

export function useAvater(){
    let circleUrl = ref('images/default-avater.png')//默认头像
    return {
        
        circleUrl
    }
}