import { ref } from 'vue'
export function useSearch(){
    let searchInput = ref('')
    const searchClickHandler=()=>{
        console.log(searchInput.value)
    }
    return {
        searchInput,
        searchClickHandler
    }
}