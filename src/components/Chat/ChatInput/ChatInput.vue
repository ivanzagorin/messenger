<template>
  <div class="chat-input">
    <ResizableTextarea
      v-bind="props"
      placeholder="Сообщение"
      @update:model-value="updateMessageValueHandler"
    />
  </div>
</template>

<script lang="ts" setup>
import { ResizableTextarea, ResizableTextareaProps } from '@/components/ui-kit/ResizableTextarea';

const props = defineProps<ResizableTextareaProps>();

const emit = defineEmits(['update:modelValue']);

const updateMessageValueHandler = (value: string) => emit('update:modelValue', value);
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
