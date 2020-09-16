import React from 'react';

import ErrorBoundary from '../ErrorBoundary';

import AdminBar from './AdminBar';

function AdminBarContainer() {
  return (
    <ErrorBoundary>
      <AdminBar />
    </ErrorBoundary>
  );
}

export default AdminBarContainer;
