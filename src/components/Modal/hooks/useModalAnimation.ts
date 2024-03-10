import { ComputedRef, computed, ref, watch } from "vue";

type ModalProps = {
  modelValue?: boolean;
};

type UseModalAnimationReturn = {
  animationClasses: ComputedRef<string | undefined>;
  isClosed: ComputedRef<boolean>;
  onAnimationEnd: () => void;
};

export function useModalAnimation(props: ModalProps, animationType = 'scale'): UseModalAnimationReturn {
  const animationState = ref(props.modelValue ? 'open' : 'closed');

  watch(() => props.modelValue, (newValue) => {
    animationState.value = newValue ? 'opening' : 'closing'
  });

  const animationClasses = computed<string | undefined>(() => {
    switch (animationState.value) {
      case 'opening':
        return `animating ${animationType} in`
      case 'open':
        return 'visible active'
      case 'closing':
        return `visible active animating ${animationType} out`
      case 'closed':
        return 'hidden'
    }
  });

  return {
    animationClasses,
    isClosed: computed(() => animationState.value === 'closed'),
    onAnimationEnd: () => animationState.value = props.modelValue ? 'open' : 'closed',
  }
};
