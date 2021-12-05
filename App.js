import React from 'react';
import { AuthProvider } from './store/contexts/AuthContext';
import AppNavigation from './components/AppNavigation';

export default function App() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}


