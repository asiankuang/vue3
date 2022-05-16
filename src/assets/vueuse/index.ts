import { ref } from 'vue'

export const useClickChange = (defaultValue: boolean) => {
    const bool = ref<boolean>(defaultValue)

    const handleFalse = () => {
        bool.value = false
    }
    const handleTrue = () => {
        bool.value = true
    }
    return {
        handleFalse,
        handleTrue,
        bool
    }
}

export default {
    useClickChange
}
