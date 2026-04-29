const MainSection = ({ children }) => {
  return (
    <section
      aria-label="Conteúdo da página"
      className="border-t border-gray-200/60 bg-[#E9E9E9] py-4 sm:py-5 lg:py-6 xlg:py-7"
    >
      <div className="site-wrap flex flex-col items-center justify-start gap-3 sm:gap-4 lg:gap-5">
        {children}
      </div>
    </section>
  );
};

export default MainSection;
