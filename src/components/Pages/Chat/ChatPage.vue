<template>
  <div class="chat">
    <div class="chat-aside">
      <ChatAside />
    </div>
    <div class="chat-main">
      <ChatMain />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChatAside from '@/components/Chat/ChatAside';
import ChatMain from '@/components/Chat/ChatMain';
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  &-aside {
    width: 370px;
  }
  &-main {
    width: calc(100% - 370px);
  }
}
</style>
