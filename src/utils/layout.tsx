import type { FC, ReactNode } from 'react';
import type { NextPage } from 'next';
import withAuth from '@/components/auth/utils/AuthRequired';
import EmptyLayout from '@/components/layout/EmptyLayout';

export type Layout = FC<{ children: ReactNode }>;

type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: Layout;
};

export function getLayout(Component: NextPageWithLayout) {
  return Component.getLayout || EmptyLayout;
}

export function setLayout(Component: NextPageWithLayout, Layout: Layout, RequiredAuth: boolean = false) {
  if (RequiredAuth) {
    Component.getLayout = withAuth(Layout);
  } else {
    Component.getLayout = Layout;
  }
}
