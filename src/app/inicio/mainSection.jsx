const MainSection = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-6 gap-6 bg-los-mobile bg-cover bg-no-repeat lg:bg-los-desktop lg:gap-32 lg:px-20 lg:py-16 xlg:px-32 ">
      {children}
    </main>
  );
};

export default MainSection;
