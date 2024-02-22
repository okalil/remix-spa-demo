import type { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => [{ title: 'Page 1 Title' }];

export default function Route() {
  return (
    <div className="py-4">
      <h2 className="font-semibold text-xl">Page 1</h2>
    </div>
  );
}
