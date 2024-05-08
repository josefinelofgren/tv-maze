const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-12">
        {children}
      </div>
    </>
  );
};

export default Layout;
