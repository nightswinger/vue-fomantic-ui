import { computed, Prop } from "vue"

const animations = ['fade', 'move', 'rotate']

type Animated = string

export interface AnimatedProps {
  animated: Animated
}

export const useAnimatedProps = {
  animated: {
    type: String,
  } as Prop<Animated>
}

export function useAnimatedClass(props: AnimatedProps) {
  const animatedClass = computed(() => {
    if (!props.animated) return null
    if (animations.includes(props.animated.split(' ')[0])) {
      return props.animated
    }

    return null
  })

  return { animatedClass }
}