<template>
  <div class="user">
    <Avatar
      :avatar="avatar"
      :name="name"
      :last-name="lastName"
      :online="online"
    />
    <div class="user-text">
      <div
        v-if="userName"
        class="user-name"
      >
        {{ userName }}
      </div>
      <div
        v-if="subtext"
        class="user-subtext"
      >
        {{ subtext }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Avatar } from '@/components/ui-kit/Avatar';
import { UserBlockProps } from './types';
import { withDefaults, computed } from 'vue';

const props = withDefaults(defineProps<UserBlockProps>(), {
  avatar: null,
  name: null,
  lastName: null,
  online: false,
  subtext: null
});

const userName = computed(() => {
  let userName = '';
  if (props.name) userName += props.name;
  if (props.lastName) userName += ` ${props.lastName}`;
  return userName;
});
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
