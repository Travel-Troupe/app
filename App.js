import React from 'react';
import { AuthProvider } from './store/contexts/AuthContext';
import AppNavigation from './components/AppNavigation';
import { UserProvider } from './store/contexts/UserContext';
import { getItem } from './utils/AppStorage';

export default function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <AppNavigation />
      </UserProvider>
    </AuthProvider>
  );
}


