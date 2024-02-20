<template>
  <div class="message">
    {{ text }}
  </div>
</template>

<script lang="ts" setup>
import { MessageItemProps } from './types';

defineProps<MessageItemProps>();
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
