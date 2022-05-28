import { ref } from "vue";

// Simple composable returning multiple objects
// You simply reference the file number when you ...
// deconstruct the composables in the component
export default function () {
    const someA = ref(500)
    const someB = ref(600)

    return {
        someA,
        someB
    }
}