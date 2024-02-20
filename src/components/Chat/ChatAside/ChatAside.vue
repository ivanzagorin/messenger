<template>
  <aside class="aside">
    <div class="aside-top">
      <Avatar
        name="Петр"
        last-name="Семенов"
        :online="true"
        class="aside-top__avatar"
      />
      <Input
        v-model.trim="search"
        placeholder="Поиск"
        type="search"
        autocorrect="off"
        :field-size="FieldSize.SMALL"
        :template="FieldTemplate.ROUNDED"
      />
    </div>
    <nav class="aside-list">
      <div class="aside-block">
        <div class="aside-title">Чаты</div>
        <ChatItem
          :chat-id="1"
          last-message="Some last message from user, Some last message from user, Some last message from user"
          :last-message-date="new Date()"
          :unread-count="77"
          avatar="/images/user.jpg"
          name="Test"
          last-name="Subtest"
          :online="true"
        />
        <ChatItem
          :chat-id="2"
          last-message="Some last message from user, Some last message from user, Some last message from user"
          :last-message-date="new Date()"
          :unread-count="77"
          avatar="/images/user.jpg"
          name="Test"
          last-name="Subtest"
          :online="true"
        />
      </div>
      <div class="aside-block">
        <div class="aside-title">Контакты</div>
        <ChatItem
          :chat-id="3"
          avatar="/images/user.jpg"
          name="Test"
          last-name="Subtest"
          :online="true"
        />
        <ChatItem
          :chat-id="4"
          avatar="/images/user.jpg"
          name="Test"
          last-name="Subtest"
          :online="true"
        />
        <ChatItem
          :chat-id="5"
          avatar="/images/user.jpg"
          name="Test"
          last-name="Subtest"
          :online="true"
        />
        <ChatItem
          :chat-id="6"
          avatar="/images/user.jpg"
          name="Test"
          last-name="Subtest"
          :online="true"
        />
        <ChatItem
          :chat-id="7"
          avatar="/images/user.jpg"
          name="Test"
          last-name="Subtest"
          :online="true"
        />
        <ChatItem
          :chat-id="8"
          avatar="/images/user.jpg"
          name="Test"
          last-name="Subtest"
          :online="true"
        />
      </div>
    </nav>
  </aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Avatar from '@/components/ui-kit/Avatar';
import { Input, FieldSize, FieldTemplate } from '@/components/ui-kit/Input';
import ChatItem from '@/components/Chat/ChatItem';

const search = ref('');
</script>

<style lang="scss" scoped>
@import './styles';
</style>
