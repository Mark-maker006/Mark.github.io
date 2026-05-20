'use client';

import { BellIcon, SettingsIcon } from 'lucide-react';
import { ThemeSwitch } from '@/components/shared/ThemeSwitch';
import { navItems } from '@/data/dashboard';

export function TopNav() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-neutral-surface dark:bg-dark-neutral-surface rounded-2xl shadow-[var(--shadow-elevated)]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center font-bold text-neutral-textMain dark:text-dark-secondary-900 text-lg">
          M
        </div>
        <span className="text-xl font-semibold text-neutral-textMain dark:text-dark-secondary-500">
          Mark.cc
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-1 bg-neutral-background dark:bg-dark-neutral-background rounded-full px-2 py-1.5">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${
                item.active
                  ? 'bg-neutral-textMain dark:bg-dark-secondary-500 text-white dark:text-dark-neutral-background'
                  : 'text-neutral-textMuted dark:text-dark-neutral-textMuted hover:text-neutral-textMain dark:hover:text-dark-secondary-500'
              }
            `}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-xl hover:bg-neutral-border dark:hover:bg-dark-neutral-border transition-colors">
          <BellIcon className="w-5 h-5 text-neutral-textMuted dark:text-dark-neutral-textMuted" />
        </button>
        <button className="p-2 rounded-xl hover:bg-neutral-border dark:hover:bg-dark-neutral-border transition-colors">
          <SettingsIcon className="w-5 h-5 text-neutral-textMuted dark:text-dark-neutral-textMuted" />
        </button>
        <ThemeSwitch />
      </div>
    </header>
  );
}