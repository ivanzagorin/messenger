import { InputHTMLAttributes } from "vue";

export interface Props extends /* @vue-ignore */ InputHTMLAttributes {
  modelValue: string;
};

export enum Icons {
  search = "@/assets/images/icons/search.svg"
};
