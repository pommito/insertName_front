import { buttonVariants } from '@/src/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <Link href={'/login'} className={buttonVariants({ variant: 'default' })}>
        Login
      </Link>
    </div>
  );
}
