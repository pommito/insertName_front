'use client';

import axios from 'axios';
import { buttonVariants } from './ui/button';

export function LogoutButton() {
  const handleLogout = async () => {
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/logout`,
        {},
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        console.log('Logged out successfully');
      } else {
        throw new Error('Failed to log out');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <button onClick={handleLogout} className={buttonVariants({ variant: 'default' })}>
      Logout
    </button>
  );
}
