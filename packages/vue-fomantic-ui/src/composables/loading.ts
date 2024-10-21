import clsx from "clsx";
import { computed } from "vue";

import type { PropType } from "vue";

const loadingValues = ['double', 'usual double', 'elastic'] as const;

export type Loading = typeof loadingValues[number];

export interface LoadingProps {
  loading?: boolean | Loading;
};

export const makeLoadingProps = () => {
  return {
    loading: {
      type: [Boolean, String] as PropType<boolean | Loading>,
      validator: (v: any) => loadingValues.includes(v) || typeof v === 'boolean'
    }
  };
};

export const useLoading = (props: LoadingProps) => {
  const loadingClasses = computed(() => {
    return clsx(props.loading, { loading: props.loading })
  });

  return { loadingClasses };
};
