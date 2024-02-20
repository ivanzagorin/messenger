import { InputTypeHTMLAttribute } from 'vue';
import { Booleanish, Numberish } from '@/types/base.types';

// TODO Wait for fix
// [@vue/compiler-sfc] Failed to resolve extends base type. (vue InputHTMLAttributes)
interface InputHTMLAttributesCopy {
  accept?: string;
  alt?: string;
  autocomplete?: string;
  autofocus?: Booleanish;
  capture?: boolean | 'user' | 'environment';
  checked?: Booleanish | unknown[] | Set<unknown>;
  crossorigin?: string;
  disabled?: Booleanish;
  enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
  form?: string;
  formaction?: string;
  formenctype?: string;
  formmethod?: string;
  formnovalidate?: Booleanish;
  formtarget?: string;
  height?: Numberish;
  indeterminate?: boolean;
  list?: string;
  max?: Numberish;
  maxlength?: Numberish;
  min?: Numberish;
  minlength?: Numberish;
  multiple?: Booleanish;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readonly?: Booleanish;
  required?: Booleanish;
  size?: Numberish;
  src?: string;
  step?: Numberish;
  type?: InputTypeHTMLAttribute;
  width?: Numberish;
}

export enum FieldSize {
  SMALL = 'small',
  LARGE = 'large'
}

export enum FieldTemplate {
  DEFAULT = 'default',
  ROUNDED = 'rounded'
}

export interface InputProps extends InputHTMLAttributesCopy {
  modelValue: unknown;
  fieldSize: FieldSize;
  template: FieldTemplate;
}
