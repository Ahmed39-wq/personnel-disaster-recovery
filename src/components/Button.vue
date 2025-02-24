<template>
    <button 
        :class="['h-11 flex justify-center items-center rounded-lg p-4', className]"
        :type="type"
        :disabled="disabled"
    >
        {{ text }}
    </button>
</template>

<script setup lang="ts">
defineProps({
    text: {
        type: String,
        required: true
    },
    className: {
        type: String,
        default: ''
    },
    type: {
        type: String as () => 'button' | 'submit' | 'reset',
        default: 'button'
    },
    disabled: {
        type: Boolean,
        default: false
    }
});
</script>
