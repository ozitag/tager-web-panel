import React, { useMemo } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { getTranslateFunction } from '../../services/i18n';

import {
  useAdminPageInfo,
  useAdminPanelInfo,
  useAdminProfile,
  useCustomFont,
  useExpanded,
} from './AdminBar.hooks';
import ExpandMoreIcon from './components/ExpandMoreIcon';

function AdminBar() {
  const adminProfile = useAdminProfile();
  const pageInfo = useAdminPageInfo();
  const panelInfo = useAdminPanelInfo();
  const { isExpanded, toggle, isInitiallyExpanded } = useExpanded();

  const t = useMemo(() => getTranslateFunction(panelInfo?.language ?? ''), [
    panelInfo,
  ]);

  const isVisible = Boolean(adminProfile);

  useCustomFont(isVisible);

  if (!isVisible) return null;

  const actions = pageInfo?.actions ?? [];

  return (
    <Container isExpanded={isExpanded}>
      <Wrapper isInitiallyExpanded={isInitiallyExpanded}>
        <Inner>
          <Section>
            <Title>TAGER</Title>
            {actions.map((action, index) => (
              <AdminButtonLink
                key={index}
                target="_blank"
                rel="noreferrer"
                href={action.url}
              >
                {action.label}
              </AdminButtonLink>
            ))}
          </Section>

          {pageInfo?.model ? (
            <PageName>
              {pageInfo.model.type}: {pageInfo.model.name}
            </PageName>
          ) : null}

          <Section>
            {panelInfo ? (
              <AdminButtonLink
                target="_blank"
                rel="noreferrer"
                href={panelInfo.adminHomeUrl}
              >
                {t('adminBar')}
              </AdminButtonLink>
            ) : null}

            <UserName>{adminProfile?.name}</UserName>
          </Section>
        </Inner>

        <ExpandButton onClick={toggle} type="button">
          <ExpandIcon />
        </ExpandButton>
      </Wrapper>
    </Container>
  );
}

const fadeInAnimation = keyframes`
  from {
    transform: translateY(-100%) translateY(22px);
  }
  to {
    transform: translateY(0)
  }
`;

const Container = styled.div<{ isExpanded: boolean }>`
  font-family: Nunito, -apple-system, 'BlickMacSystemFont', 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  color: #495057;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
  height: 0;

  @media (max-width: 767.98px) {
    display: none;
  }

  ${(props) =>
    props.isExpanded
      ? css`
          ${Wrapper} {
            transform: translateY(-100%) translateY(22px);
          }

          ${ExpandIcon} {
            transform: rotate(0deg);
          }
        `
      : null}
`;

const Wrapper = styled.div<{ isInitiallyExpanded: boolean }>`
  will-change: transform;
  transition: transform 0.3s linear;

  ${(props) =>
    props.isInitiallyExpanded
      ? css`
          animation: ${fadeInAnimation} 0.5s linear;
        `
      : null}
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  font-size: 1rem;
  background: white;
  height: 50px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.12);
  position: relative;
`;

const Title = styled.span`
  font-weight: 600;
  letter-spacing: 0.15em;
  font-size: 20px;
  margin-right: 1rem;
`;

const PageName = styled.span`
  font-size: 20px;
  margin-right: 1rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Section = styled.div`
  display: flex;
  align-items: center;
`;

const AdminButtonLink = styled.a`
  height: 35px;
  white-space: nowrap;
  padding: 0 1rem;
  border: 1px solid #666;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const UserName = styled.span``;

const ExpandButton = styled.button`
  display: inline-block;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-top: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  margin-left: calc(100% - 40px);
`;

const ExpandIcon = styled(ExpandMoreIcon)`
  display: block;
  width: 21px;
  height: 21px;
  transition: transform 0.3s linear;
  transform: rotate(180deg);
`;

export default AdminBar;
