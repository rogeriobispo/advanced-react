import { Component, type ErrorInfo } from 'react';

class ErrorsBounders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }

  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error:', error);
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorsBounders;
