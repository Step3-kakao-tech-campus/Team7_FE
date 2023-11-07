import type { FC, ReactNode } from 'react';
import type { NextPage } from 'next';
import EmptyLayout from '@/components/layout/EmptyLayout';

export type Layout = FC<{ children: ReactNode }>;

type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: Layout;
};

export function getLayout(Component: NextPageWithLayout) {
  return Component.getLayout || EmptyLayout;
}

export function setLayout(Component: NextPageWithLayout, Layout: Layout) {
  Component.getLayout = Layout;
}
