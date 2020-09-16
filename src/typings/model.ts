import { Nullable } from '@tager/web-core';

export type AdminProfileType = {
  name: string;
  email: string;
};

export type PageInfoType = {
  actions: Array<{
    label: string;
    url: string;
  }>;
  model: Nullable<{
    type: string;
    name: string;
  }>;
};

export type PanelInfoType = {
  language: string;
  adminHomeUrl: string;
};
