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
        :field-size="FieldSize.SMALL"
        :template="FieldTemplate.ROUNDED"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Avatar from '@/components/ui-kit/Avatar';
import { Input, FieldSize, FieldTemplate } from '@/components/ui-kit/Input';

const search = ref('');
</script>

<style lang="scss" scoped>
@import './styles';
</style>
