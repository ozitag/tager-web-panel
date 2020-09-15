import { request, ResponseBody } from '@tager/web-core';

import { AdminProfileType, PanelPageInfo } from '../typings/model';

export function getPanelPage(
  pagePath: string
): Promise<ResponseBody<PanelPageInfo>> {
  return request.get({ path: '/tager/panel/page', params: { path: pagePath } });
}

export function getAdminProfile(
  headers: Headers
): Promise<ResponseBody<AdminProfileType>> {
  return request.get({ path: '/admin/self', fetchOptions: { headers } });
}
