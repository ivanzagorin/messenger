<template>
  <div class="avatar">
    <img
      v-if="avatar"
      class="avatar-img"
      :src="avatar"
      :alt="abbreviation || imageAlt"
      width="40"
      height="40"
    />
    <span
      v-else-if="abbreviation"
      class="avatar-abbreviation"
    >
      {{ abbreviation }}
    </span>
    <img
      v-else
      class="avatar-img"
      src="@/assets/images/icons/user.svg"
      :alt="imageAlt"
      width="40"
      height="40"
    />
    <div
      v-if="online"
      class="avatar-online"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, withDefaults } from 'vue';
import { AvatarProps } from './types';

const imageAlt = 'Фото пользователя';

const props = withDefaults(defineProps<AvatarProps>(), {
  avatar: null,
  name: null,
  lastName: null,
  online: false
});

const abbreviation = computed(() => {
  let result = '';
  if (props.name) {
    result += props.name[0].toUpperCase();
  }
  if (props.lastName) {
    result += props.lastName[0].toUpperCase();
  }
  return result;
});
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
