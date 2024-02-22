import { Link, Outlet } from '@remix-run/react';

export default function LayoutRoute() {
  return (
    <div className="h-full px-6 py-6">
      <nav className="inline-flex gap-2">
        <Link to="/page1" className="text-blue-500 visited:text-purple-600 underline">
          Page 1
        </Link>
        <Link to="/page2" className="text-blue-500 visited:text-purple-600 underline">
          Page 2
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}
