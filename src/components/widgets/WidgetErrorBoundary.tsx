import { Component } from "react";

class WidgetErrorBoundary extends Component {
  state: any;
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <p>component crashed or never loaded</p>;
    }

    return this.props.children;
  }
}

export default WidgetErrorBoundary;
