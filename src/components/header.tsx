import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Header() {
  return (
    <header className="flex min-h-[60px] items-center justify-between lg:flex lg:px-4 xl:px-0">
      <div className="container mx-auto flex w-full items-center justify-between rounded-2xl px-[3px] backdrop-blur-xl">
        <div className="flex flex-1 items-center gap-2 pl-3">
          <Link href={'/'} className="flex items-center gap-1.5">
            LOGO
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2 pl-3">
          <Link href={'/login'} className={buttonVariants({ variant: 'secondary' })}>
            Sign in
          </Link>
          <Link href={'#'} className={buttonVariants({ variant: 'default' })}>
            Try name for free <ArrowRight />
          </Link>
        </div>
      </div>
    </header>
  );
}
