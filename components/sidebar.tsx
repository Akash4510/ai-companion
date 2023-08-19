'use client';

import { Home, Plus, Settings } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';
import { useProModal } from '@/hooks/use-pro-modal';

interface SidebarProps {
  isPro: boolean;
}

const Sidebar = ({ isPro }: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const proModal = useProModal();

  const routes = [
    {
      label: 'Home',
      href: '/',
      icon: Home,
      pro: false,
    },
    {
      label: 'Create',
      href: '/companion/new',
      icon: Plus,
      pro: true,
    },
    {
      label: 'Settings',
      href: '/settings',
      icon: Settings,
      pro: false,
    },
  ];

  const onNavigate = (url: string, pro: boolean) => {
    // Check if PRO
    if (pro && !isPro) {
      return proModal.open();
    }

    return router.push(url);
  };

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex flex-1 justify-center">
        <div className="space-y-2">
          {routes.map((route) => (
            <div
              key={route.href}
              onClick={() => onNavigate(route.href, route.pro)}
              className={cn(
                'text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition',
                pathname === route.href && 'bg-primary/10 text-primary'
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <route.icon className="h-5 w-5" />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
