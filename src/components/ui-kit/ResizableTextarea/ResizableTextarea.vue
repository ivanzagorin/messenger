<template>
  <div class="textarea">
    <textarea
      v-bind="props"
      :value="props.modelValue"
      class="textarea-field"
      @input="updateModelValueHandler($event)"
      @keyup="keyupHandler"
    ></textarea>
    <div class="textarea-substrate">
      {{ modelValue }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ResizableTextareaProps } from './types';

const props = defineProps<ResizableTextareaProps>();

const emit = defineEmits(['update:modelValue', 'keyup']);

const updateModelValueHandler = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const keyupHandler = (event: Event) => emit('keyup', event);
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
