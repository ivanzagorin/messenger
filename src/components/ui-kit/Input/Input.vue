<template>
  <div 
    class="input"
    :class="classList"
  >
    <input
      v-bind="props"
      class="input-field"
      @input="updateModelValueHandler($event)"
      @focus="focusHandler"
    >
  </div>
</template>

<script lang="ts" setup>
import { Props, Icons } from "./interfaces";
import { computed, defineProps, withDefaults } from "vue";

const props = withDefaults(defineProps<Props>(), {
  type: 'text'
});

const classList = computed(() => `input__${props.type}`);
const icon = computed(() => {
  if (!Object.values(Icons).includes(props.type as any)) {
    return null;
  }
  Icons[props.type];
});

const emit = defineEmits(['update:modelValue', 'focus']);

const updateModelValueHandler = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value);
};

const focusHandler = () => emit('focus');
</script>

<style>
@import './styles.scss';
</style>
