import { ReactNode } from 'react';
import GxpNavbar from './GxpNavbar';
import GxpFooter from './GxpFooter';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <GxpNavbar />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <GxpFooter />
    </div>
  );
};

export default PageLayout;
