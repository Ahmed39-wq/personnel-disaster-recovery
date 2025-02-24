<template>
    <div>
        <FormLabel v-if="label" :htmlFor="id">{{ label }}</FormLabel>
        <div class="relative flex outline-gray-300">
            <input
                :id="id"
                :type="type"
                :class="['border border-gray-500 w-full h-10 rounded-lg px-3 focus:outline-none', className]"
                :placeholder="placeholder"
                v-bind="$attrs"
            />
            <div v-if="type === 'password'" class="absolute inset-y-0 right-3 flex items-center">
                <button 
                    type="button"
                    @click="togglePassword"
                    class="p-1 focus:outline-none"
                    aria-label="Toggle password visibility"
                >
                    <component :is="showPassword ? HideEye : ShowEye" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import FormLabel from '../components/input/FormLabel.vue';
import HideEye from './input/HideEye.vue';
import ShowEye from './input/ShowEye.vue';
import { ref } from 'vue';

defineProps({
    id: {
        type: String,
        default: ''
    },
    label: String,
    type: {
        type: String,
        default: 'text'
    },
    className: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    }
});

const showPassword = ref(false);

const togglePassword = () => {
    showPassword.value = !showPassword.value;
};
</script>
