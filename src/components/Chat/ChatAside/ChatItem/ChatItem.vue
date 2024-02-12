<template>
  <router-link
    :to="chatLink"
    class="item"
  >
    <UserBlock
      :avatar="avatar"
      :name="name"
      :last-name="lastName"
      :online="online"
      :subtext="lastMessage"
      class="item-user"
    />
    <div
      v-if="lastMessageDate || unreadCount"
      class="item-info"
    >
      <div
        v-if="lastMessageDate"
        class="item-date"
      >
        {{ lastMessageDate }}
      </div>
      <div
        v-if="unreadCount"
        class="item-unread"
      >
        {{ unreadCount }}
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { helpers } from '@/features';
import UserBlock from '@/components/ui-kit/UserBlock';
import { ChatItemProps } from './types';

const props = defineProps<ChatItemProps>();

const chatLink = computed(() => `/${props.chatId}`);
const lastMessageDate = computed(() => {
  if (!props.lastMessageDate || !(props.lastMessageDate instanceof Date)) {
    return null;
  }

  const day = props.lastMessageDate.getDay();
  const monthNumber = props.lastMessageDate.getMonth() as helpers.dates.monthNumber;
  const month = helpers.dates.getMonthName(monthNumber);
  return `${day} ${month}`;
});
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
