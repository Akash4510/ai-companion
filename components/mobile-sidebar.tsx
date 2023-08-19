'use client';

import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from '@/components/sidebar';

interface MobileSidebarProps {
  isPro: boolean;
}

const MobileSidebar = ({ isPro }: MobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-secondary pt-10 w-30">
        <Sidebar isPro={isPro} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
