import React, { ErrorInfo } from 'react';

type Props = {};
type State = { hasError: boolean };

class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('AdminBar error: ', error.message);
    console.error('Stack: ', errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
