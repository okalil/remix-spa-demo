import type { MetaFunction } from '@remix-run/node';
import { redirect } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Index Page Title' },
    { name: 'description', content: 'Index Page Description' },
  ];
};

export const clientLoader = () => redirect('/page1');

export default function Route() {
  return null;
}
