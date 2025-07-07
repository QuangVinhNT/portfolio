import type { ReactNode } from "react";

export type Contact = {
  icon: ReactNode,
  label: string,
  value?: string,
  link?: string;
};
