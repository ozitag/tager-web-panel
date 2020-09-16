import { Nullable } from '@tager/web-core';

export type AdminProfileType = {
  name: string;
  email: string;
};

export type PanelPageInfo = {
  language: string;
  button: Nullable<{
    label: string;
    url: string;
  }>;
};
