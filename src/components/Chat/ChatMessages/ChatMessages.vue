<template>
  <div class="list">
    <MessageItem
      text="Текст сообщения"
      :status="MessageStatus.SENDED"
    />
    <MessageItem
      text="Текст сообщения"
      :status="MessageStatus.SENDED"
    />
    <MessageItem
      text="Текст сообщения"
      :status="MessageStatus.SENDED"
    />
    <MessageItem
      text="Текст сообщения"
      :status="MessageStatus.SENDED"
    />
  </div>
</template>

<script lang="ts" setup>
import { MessageItem, MessageStatus } from '@/components/Chat/MessageItem';
</script>
