<template>
<component
    :is="props.tag"
    :type="tag === 'button' ? props.nativeType : void 0"
    class="er-button"
    :class="{
      [`er-button--${props.size}`]: props.size,
      [`er-button--${props.type}`]: props.type,
      'is-plain': props.plain,
      'is-round': props.round,
      'is-circle': props.circle,
      'is-loading': props.loading,
      'is-disabled': props.disabled,
    }"
    :disabled="props.disabled || props.loading ? true : false"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps } from './types';

defineOptions({
  name: "SchButton" // 组件名字为SchButton
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
})

const slots = defineSlots();
const _ref = ref<HTMLButtonElement>()

</script>
<style scoped>
@import './style.css';
</style>
