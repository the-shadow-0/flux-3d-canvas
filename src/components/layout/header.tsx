import Link from 'next/link';
import { Logo } from '@/components/icons/logo';
import { ThemeSwitcher } from '@/components/ui-overlay/theme-switcher';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 glassmorphic">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" aria-label="Neon Canvas Home">
          <Logo className="h-10 w-auto" />
        </Link>
        <div className="flex items-center gap-4">
          <h1 className="hidden sm:block text-xl font-semibold neon-text-primary tracking-wider">
            Neon Canvas
          </h1>
           <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
