import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './ErrorBoundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/U3vTGjX.png" />
          <ErrorImageText>There’s a Leak in the Website</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
