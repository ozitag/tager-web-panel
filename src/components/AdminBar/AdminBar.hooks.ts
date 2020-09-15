import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Nullable } from '@tager/web-core';

import { AdminProfileType, PanelPageInfo } from '../../typings/model';
import { getAdminProfile, getPanelPage } from '../../services/requests';
import {
  ADMIN_ACCESS_TOKEN_KEY,
  IS_ADMIN_BAR_EXPANDED_KEY,
} from '../../constants/common';

export function useAdminProfile(): Nullable<AdminProfileType> {
  const [adminProfile, setAdminProfile] = useState<Nullable<AdminProfileType>>(
    null
  );

  useEffect(() => {
    const accessToken = localStorage.getItem(ADMIN_ACCESS_TOKEN_KEY);

    if (!accessToken) return;

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `Bearer ${accessToken}`);

    getAdminProfile(headers)
      .then((response) => {
        setAdminProfile(response.data);
      })
      .catch(() => {
        setAdminProfile(null);
      });
  }, []);

  return adminProfile;
}

export function useAdminPage(): Nullable<PanelPageInfo> {
  const router = useRouter();
  const [pageInfo, setPageInfo] = useState<Nullable<PanelPageInfo>>(null);

  useEffect(() => {
    getPanelPage(router.pathname)
      .then((response) => {
        setPageInfo(response.data);
      })
      .catch(() => {
        setPageInfo(null);
      });
  }, [router.pathname]);

  return pageInfo;
}

export function useExpanded(): [boolean, () => void] {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  function toggleBar() {
    const newValue = !isExpanded;
    setExpanded(newValue);
    localStorage.setItem(IS_ADMIN_BAR_EXPANDED_KEY, String(newValue));
  }

  useEffect(() => {
    const isExpandedInitial =
      localStorage.getItem(IS_ADMIN_BAR_EXPANDED_KEY) === 'true';
    setExpanded(Boolean(isExpandedInitial));
  }, []);

  return [isExpanded, toggleBar];
}
