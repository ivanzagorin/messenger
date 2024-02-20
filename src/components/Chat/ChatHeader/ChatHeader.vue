<template>
  <div class="chat-header">
    <UserBlock
      avatar="/images/user.jpg"
      name="John"
      last-name="Malcovich"
      subtext="Был в сети давно"
    />
  </div>
</template>

<script lang="ts" setup>
import UserBlock from '@/components/ui-kit/UserBlock';
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
