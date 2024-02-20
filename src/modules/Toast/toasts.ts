import type { AppContext, VNode } from "vue";
import { getCurrentInstance, h, ref, render } from "vue";

import { Toast } from "./Toast";
import ToastContainer from "./ToastContainer";

import type { Color } from "../../composables/color";

const toastTypeValues = ["success", "error", "warning", "info"] as const;
export type ToastType = typeof toastTypeValues[number];

const positionValues = ["top right", "top center", "top left", "bottom right", "bottom center", "bottom left", "centered"] as const;
export type Position = typeof positionValues[number];

type ToastOptions = {
  type?: ToastType;
  title?: string;
  message: string;
  displayTime?: number;
  centered?: boolean;
  position?: Position;
  attached?: "top" | "bottom";
  horizontal?: boolean;
  showProgress?: "top" | "bottom";
  showProgressColor?: Color;
};

const seed = ref(1);

const mount = (vNode: VNode, { appContext, element }: { appContext?: AppContext, element?: HTMLElement } = {}) => {
  const el = element || document.createElement("div");

  if (appContext) {
    vNode.appContext = appContext;
  }
  render(vNode, el);

  return { vNode, el };
};

export const getDatasetProps = (el: HTMLElement) => {
  if (!el.dataset.id) return null;

  return {
    id: Number(el.dataset.id),
    displayTime: Number(el.dataset.displayTime) || undefined,
    type: el.dataset.type as ToastType,
    title: el.dataset.title,
    message: el.dataset.message || "",
    centered: el.dataset.centered === "true",
    showProgress: el.dataset.showProgress as "top" | "bottom",
    showProgressColor: el.dataset.showProgressColor as Color,
  };
};

const setDatasetProps = (el: HTMLElement, props: Toast['$props']) => {
  (Object.keys(props) as (keyof Toast['$props'])[]).forEach((key) => {
    el.dataset[key] = props[key] ? props[key]!.toString() : "";
  });
};

const createToast = (toast: Toast['$props'], element?: HTMLElement) => {
  const vNode = h(Toast, { ...toast });
  mount(vNode);

  const el = vNode.el as HTMLElement;
  el.style.opacity = "0";

  setDatasetProps(el, toast);

  element?.appendChild(el);

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

const getToastContainer = ({ position = 'top right', attached, horizontal }: { position?: Position, attached?: string, horizontal?: boolean }) => {
  const className = attached ?
    `.ui.toast-container.${attached}.attached` :
    `.ui.toast-container.${position.split(' ').join('.')}${horizontal ? '.horizontal' : ':not(.horizontal)'}`;
  return <HTMLElement>document.querySelector(className);
};

export const useToast = () => {
  const appContext = getCurrentInstance()?.appContext;

  const toast = ({ position, attached, horizontal, ...options }: ToastOptions) => {
    const newToast = {
      id: seed.value++,
      ...options,
    };
    const container = getToastContainer({ position, attached, horizontal }) || createToastContainer(appContext, { position, attached, horizontal });
    createToast(newToast, container);
  };

  return {
    toast,
  };
};
