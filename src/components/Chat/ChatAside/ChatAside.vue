<template>
  <div class="aside">
    <div class="aside-top">
      <Avatar
        avatar="/images/user.jpg"
        :online="true"
        class="aside-top__avatar"
      />
      <Input
        v-model.trim="search"
        placeholder="Поиск"
        type="search"
        autocorrect="off"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Avatar from "@/components/ui-kit/Avatar";
import Input from "@/components/ui-kit/Input";

const search = ref('');
</script>

<style lang="scss" scoped>
.aside {
  border-radius: 8px 0px 0px 0px;
  border: 1px solid $border-color;
  &-top {
    display: flex;
    align-items: center;
    padding: 14px 16px 12px;
    border-bottom: 1px solid $border-color;
    &__avatar {
      margin-right: 15px;
    }
  }
} 
</style>
