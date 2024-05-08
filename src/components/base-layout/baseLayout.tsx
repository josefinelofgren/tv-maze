import ContextProvider from "@/app/context/contextProvider";
import Header from "../header/header";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ContextProvider>
      <Header />
      <div className="relative flex min-h-screen flex-col items-center justify-between p-12">
        {children}
      </div>
    </ContextProvider>
  );
};

export default Layout;
