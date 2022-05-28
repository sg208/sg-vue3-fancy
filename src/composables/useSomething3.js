import { ref } from "vue";

export default function () {
    const stingA = ref('Weee')
    const stingB = ref('Yeee')

    return {
        stingA, stingB
    }
}