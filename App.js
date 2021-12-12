import React from 'react';
import { AuthProvider } from './store/contexts/AuthContext';
import AppNavigation from './components/AppNavigation';
import { UserProvider } from './store/contexts/UserContext';

export default function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <AppNavigation />
      </UserProvider>
    </AuthProvider>
  );
}


