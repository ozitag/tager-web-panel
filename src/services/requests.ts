import { request, ResponseBody } from '@tager/web-core';

import {
  AdminProfileType,
  PageInfoType,
  PanelInfoType,
} from '../typings/model';

export function getPageInfo(
  pagePath: string
): Promise<ResponseBody<PageInfoType>> {
  return request.get({ path: '/tager/panel/page', params: { path: pagePath } });
}

export function getPanelInfo(): Promise<ResponseBody<PanelInfoType>> {
  return request.get({ path: '/tager/panel/info' });
}

export function getAdminProfile(
  headers: Headers
): Promise<ResponseBody<AdminProfileType>> {
  return request.get({ path: '/admin/self', fetchOptions: { headers } });
}
