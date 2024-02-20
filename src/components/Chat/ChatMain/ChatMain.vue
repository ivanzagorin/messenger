<template>
  <div class="chat">
    <ChatMainEmpty v-if="isEmpty" />
    <template v-else>
      <ChatHeader />
      <ChatMessages />
      <ChatInput v-model.trim="message" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import ChatMainEmpty from '@/components/Chat/ChatMainEmpty';
import ChatHeader from '@/components/Chat/ChatHeader';
import ChatMessages from '@/components/Chat/ChatMessages';
import ChatInput from '@/components/Chat/ChatInput';

const route = useRoute();

const isEmpty = computed(() => !route.params?.id);
const message = ref('');
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
