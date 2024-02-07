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
  </div>
</template>

<script lang="ts" setup>
import { computed, withDefaults } from 'vue';
import { Props } from './types';

const imageAlt = 'Фото пользователя';

const props = withDefaults(defineProps<Props>(), {
  avatar: '',
  name: '',
  lastName: '',
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
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $primary;
  &-img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: $base-color-white;
  }
  &-abbreviation {
    font-size: 1.2rem;
    font-weight: 600;
    color: $base-color-white;
  }
}
</style>
