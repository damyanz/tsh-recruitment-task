import Header from 'components/Header';

import { MainLayoutProps } from './MainLayout.interface';

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col flex-1 h-screen">
      <Header />
      <main className="flex justify-center flex-1 bg-gray-100">{children}</main>
    </div>
  );
}

export default MainLayout;
