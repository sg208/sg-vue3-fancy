import { ref } from "vue";

// Here we're declaring the the function first before we export it
function useSomething2 () {
    const singA = ref('Hello')
    const singB = ref('World')

    return {
        singA, singB
    }
}

export default useSomething2