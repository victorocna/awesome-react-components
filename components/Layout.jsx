import { Footer, Header, Menu } from '.';

const Layout = ({ children }) => (
  <div className="flex flex-col h-screen">
    <Header />
    <Menu />
    <main className="bg-gray-100 flex flex-col flex-1">
      <div className="w-full mx-auto">{children}</div>
    </main>
    <Footer />
  </div>
);

export default Layout;
