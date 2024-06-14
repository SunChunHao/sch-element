<template>
  <component :is="props.tag" :type="tag === 'button' ? props.nativeType : void 0" class="er-button" :class="{
    [`er-button--${props.size}`]: props.size,
    [`er-button--${props.type}`]: props.type,
    'is-plain': props.plain,
    'is-round': props.round,
    'is-circle': props.circle,
    'is-loading': props.loading,
    'is-disabled': props.disabled,
  }" :disabled="props.disabled || props.loading ? true : false"
    @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)"> 
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
import { throttle } from 'lodash-es'

defineOptions({
  name: "SchButton" // 组件名字为SchButton
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 3000
})

const emits = defineEmits<ButtonEmits>()
const slots = defineSlots();
const _ref = ref<HTMLButtonElement>()

const handleBtnClick = (e: MouseEvent) => emits('click', e);
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration)


defineExpose<ButtonInstance>({
  ref: _ref
})

</script>
<style scoped>
@import './style.css';
</style>
