export const LayoutIntern = ({ className, children }) => {
  return (
    <main
      className={`relative col-span-4 row-start-2 bg-primary-grey-700 py-8 px-4 md:col-span-8 md:px-8 lg:col-span-9 lg:col-start-4 xl:col-span-10 xl:col-start-3 ${className}`}
    >
      {children}
    </main>
  );
};
