"use client";

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
    errorInfo?: ErrorInfo;
}

export class SceneErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Scene error:', error, errorInfo);
        this.setState({ errorInfo });
    }

    private handleReset = () => {
        this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="w-full h-full flex items-center justify-center bg-black/5">
                    <div className="text-center p-8 bg-background rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-red-500">3D Scene Error</h2>
                        <p className="text-sm text-muted-foreground mt-4 max-w-md">
                            {this.state.error?.message || 'An unknown error occurred in the 3D scene.'}
                        </p>
                        {this.state.errorInfo && (
                            <pre className="mt-4 p-4 bg-muted text-left text-xs overflow-auto max-h-40 rounded">
                                {this.state.errorInfo.componentStack}
                            </pre>
                        )}
                        <button
                            onClick={this.handleReset}
                            className="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
