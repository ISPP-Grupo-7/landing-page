import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error en el componente:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center p-4">
            <h2 className="text-xl font-bold text-red-600 mb-2">
              Algo salió mal al cargar el modelo 3D
            </h2>
            <p className="text-gray-600">
              Por favor, recarga la página o inténtalo más tarde
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 