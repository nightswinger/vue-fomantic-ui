import { getCurrentInstance, h, ref, render } from "vue";

import ToastContainer from "./ToastContainer";
import ToastActions from "./ToastActions";

import type { AppContext, VNode } from "vue";

import type { ToastActionOptions, ToastType } from "./Toast";

import type { Attached } from "../../composables/attached";
import type { Color } from "../../composables/color";
import type { Position } from "../../composables/position";

type ToastOptions = {
  id: number;
  type?: ToastType;
  title?: string;
  message: string;
  displayTime?: number;
  centered?: boolean;
  position?: Position;
  messageStyle?: boolean;
  color?: Color;
  inverted?: boolean;
  attached?: "top" | "bottom" | "left";
  horizontal?: boolean;
  showProgress?: "top" | "bottom";
  showProgressColor?: Color;
  showProgressUp?: boolean;
  actions?: (options: ToastActionOptions) => VNode[];
  actionsProps?: InstanceType<typeof ToastActions>['$props'];
};

type CreateToastOptions = Omit<ToastOptions, 'id'>;

const seed = ref(1);
const items = ref<ToastOptions[]>([]);

export const useToastController = () => {
  const add = (options: CreateToastOptions) => {
    options.position = options.position || 'top right';

    items.value = [...items.value, { id: seed.value++, ...options }];
  };
  
  const remove = (id: number) => {
    items.value = items.value.filter((item) => item.id !== id);
  };

  return {
    items,
    add,
    remove,
  };
};

export const useToast = () => {
  const appContext = getCurrentInstance()?.appContext;

  const { add } = useToastController();

  const toast = (options: CreateToastOptions) => {
    const { position, attached, horizontal } = options;
    const container = getToastContainer({ position, attached, horizontal });

    if (!container) {
      createToastContainer(appContext, { position, attached, horizontal });
    }

    add(options);
  };

  return { toast };
};

const mount = (vNode: VNode, { appContext, element }: { appContext?: AppContext, element?: HTMLElement } = {}) => {
  const el = element || document.createElement("div");

  if (appContext) {
    vNode.appContext = appContext;
  }

  render(vNode, el);

  return { vNode, el };
};

const createToastContainer = (appContext?: AppContext, { position = 'top right', attached, horizontal = false }: { position?: Position, attached?: Attached, horizontal?: boolean } = {}) => {
  const vNode = h(ToastContainer, { position, attached, horizontal });

  const { el } = mount(vNode, { appContext });
  
  return { vNode, el };
};

const getToastContainer = ({ position = 'top right', attached, horizontal }: { position?: Position, attached?: string, horizontal?: boolean }) => {
  const className = attached ?
    `.ui.toast-container.${attached}.attached` :
    `.ui.toast-container.${position.split(' ').join('.')}${horizontal ? '.horizontal' : ':not(.horizontal)'}`;
  return <HTMLElement>document.querySelector(className);
};
