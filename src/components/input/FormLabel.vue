<template>
    <label :for="htmlFor"
        class="text-gray-700 text-sm font-medium flex flex-col gap-4 flex-grow relative"
    >
        <slot></slot>
    </label>
</template>

<script setup lang="ts">
defineProps({
    htmlFor: {
        type: String,
    }
})
</script>