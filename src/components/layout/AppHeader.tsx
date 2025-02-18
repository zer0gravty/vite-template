import ColorThemeToggle from '@/components/blocks/ColorThemeToggle';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Link } from '@tanstack/react-router';
import { HammerIcon } from 'lucide-react';

function AppHeader() {
  return (
    <header className="header-ctr flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-indigo-500 justify-between">
      <div className="header-left-ctr flex ps-2 gap-1 justify-center items-center">
        <SidebarTrigger className="p-2" variant={'outline'} size={'icon'} />
      </div>
      <div className="header-center-ctr flex items-center gap-2">
        <HammerIcon />
        <span>Build It, Inc.</span>
      </div>
      <div className="header-right-ctr flex pe-2 gap-2 items-center">
        <ColorThemeToggle />
        <Link
          className="bg-indigo-800 text-sm py-1 px-2 rounded-xl [&.active]:font-bold"
          to="/"
        >
          Log in
        </Link>
      </div>
    </header>
  );
}

export default AppHeader;
