import { AppContext, VNode, getCurrentInstance, h, ref, render } from "vue";

import ToastContainer from "./ToastContainer";

type ToastItem = {
  id: number;
} & ToastOptions;

const seed = ref(1);
const toastItems = ref<ToastItem[]>([]);

const mount = (vNode: VNode, { appContext, element }: { appContext?: AppContext, element?: HTMLElement }) => {
  const el = element || document.createElement("div");

  if (appContext) {
    vNode.appContext = appContext;
  }
  render(vNode, el);

  return { vNode, el };
};

const createToast = (toast: ToastItem) => {
  toastItems.value.push(toast);

  return toast.id;
};

type ToastContainerProps = InstanceType<typeof ToastContainer>["$props"];

const createToastContainer = (appContext?: AppContext, props?: ToastContainerProps) => {
  const vNode = h(ToastContainer, props);

  const { el } = mount(vNode, { appContext });
  document.body.appendChild(el.childNodes[0]);

  const container = vNode.el as HTMLElement;

  return container;
};

const getToastContainer = () => {
  return <HTMLElement>document.querySelector('.ui.toast-container');
};

export const useToastContainer = () => {
  const removeToast = (id: number) => {
    const index = toastItems.value.findIndex((item) => item.id === id);
    if (index !== -1) {
      toastItems.value.splice(index, 1);
    }
  };

  return {
    removeToast,
    toastItems,
  };
};

const toastTypeValues = ["success", "error", "warning", "info"] as const;
export type ToastType = typeof toastTypeValues[number];

const positionValues = ["top right", "top center", "top left", "bottom right", "bottom center", "bottom left", "centered"] as const;
export type Position = typeof positionValues[number];

type ToastOptions = {
  type?: ToastType;
  title?: string;
  message: string;
  displayTime?: number;
  position?: Position;
};

export const useToast = () => {
  const appContext = getCurrentInstance()?.appContext;

  const toast = ({
    type,
    title,
    message,
    displayTime,
    position,
  }: ToastOptions) => {
    const newToast = {
      id: seed.value++,
      title,
      type,
      message,
      displayTime,
    };
    const container = getToastContainer();
    if (!container) {
      createToastContainer(appContext, { position });
    }
    createToast(newToast);
  };

  return {
    toast,
  };
};
