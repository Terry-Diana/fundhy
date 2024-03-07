import React, { useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleOnError = (error, errorInfo) => {
    // Log error details to the console or a logging service
    console.error("Error caught by error boundary:", error, errorInfo);
    // Update state to indicate an error has occurred
    setHasError(true);
  };

  if (hasError) {
    // Render fallback UI when an error occurs
    return <h1>Something went wrong. Please try again later.</h1>;
  }

  // Render children if no error occurred
  return (
    <React.ErrorBoundary onError={handleOnError}>
      {children}
    </React.ErrorBoundary>
  );
};

export default ErrorBoundary;
