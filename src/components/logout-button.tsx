'use client';

import { useRouter } from 'next/navigation';
import { handleLogout } from '../hooks/auth';
import { buttonVariants } from './ui/button';

export function LogoutButton() {
  const router = useRouter();

  const handleClick = async () => {
    const response = await handleLogout();
    if (response === 204) {
      router.push('/login');
    }
  };

  return (
    <button onClick={handleClick} className={buttonVariants({ variant: 'default' })}>
      Logout
    </button>
  );
}
