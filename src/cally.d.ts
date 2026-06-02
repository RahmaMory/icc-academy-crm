import type { DetailedHTMLProps, HTMLAttributes, Ref } from "react";

type CallyElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  class?: string;
  value?: string;
  today?: string;
  ref?: Ref<HTMLElement>;
  getDayParts?: (date: Date) => string;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "calendar-date": CallyElementProps;
      "calendar-month": CallyElementProps;
    }
  }
}

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "calendar-date": CallyElementProps;
      "calendar-month": CallyElementProps;
    }
  }
}

declare module "react/jsx-dev-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "calendar-date": CallyElementProps;
      "calendar-month": CallyElementProps;
    }
  }
}

export {};