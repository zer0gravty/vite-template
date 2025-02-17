import { Link } from '@tanstack/react-router';
import { HammerIcon } from 'lucide-react';
import { SidebarTrigger } from '../ui/sidebar';

function AppHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-indigo-500 justify-between">
      <SidebarTrigger />
      <div className="header-left-ctr flex items-center gap-2">
        <HammerIcon />
        <span>Build It, Inc.</span>
      </div>
      <div className="header-right-ctr flex items-center">
        <Link
          className="bg-indigo-800 py-1 px-2 rounded-xl [&.active]:font-bold"
          to="/"
        >
          Log in
        </Link>
      </div>
    </header>
  );
}

export default AppHeader;
