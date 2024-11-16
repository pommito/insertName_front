'use client';

import axios from 'axios';
import { buttonVariants } from './ui/button';

export function LogoutButton() {
  const handleLogout = async () => {
    await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/sanctum/csrf-cookie`, {
      withCredentials: true,
    });

    await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/logout`,
      {},
      {
        withCredentials: true,
        withXSRFToken: true,
      }
    );
  };

  return (
    <button onClick={handleLogout} className={buttonVariants({ variant: 'default' })}>
      Logout
    </button>
  );
}
