"use client"

import { useEffect, useState } from 'react';
import Router from 'next/router';

const LoaderComponent = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);
    Router.events.on('routeChangeError', stopLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
      Router.events.off('routeChangeError', stopLoading);
    };
  }, []);

  return loading ? (
    <div className="flex h-screen items-center justify-center bg-gray-300">
      <div className="border-y-8 border-blue-500 border-solid rounded-full animate-spin h-48 w-48"></div>
    </div>
  ) : null;
};

export default LoaderComponent;
