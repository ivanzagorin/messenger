<template>
  <div 
    class="input"
    :class="classList"
  >
    <img
      v-if="icon"
      class="input-icon"
      :src="icon"
      :alt="placeholder || type"
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
import { Props, FieldSize, FieldTemplate } from "./types";
import { computed, defineProps, withDefaults } from "vue";
import searchIcon from "@/assets/images/icons/search.svg";

const ICONS = {
  search: searchIcon
};

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  fieldSize: FieldSize.LARGE,
  template: FieldTemplate.DEFAULT
});

const classList = computed(() => {
  let classList = `input__${props.type} input__${props.fieldSize} input__${props.template}`;
  if (icon.value) {
    classList += ' input__icon';
  }
  return classList;
});

const icon = computed(() => {
  if (ICONS.hasOwnProperty(props.type)) {
    return ICONS[props.type as keyof typeof ICONS];
  }
  null;
});

const emit = defineEmits(['update:modelValue', 'focus']);

const updateModelValueHandler = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value);
};

const focusHandler = () => emit('focus');

defineOptions({ inheritAttrs: false });
</script>

<style>
@import './styles.scss';
</style>
