export const LayoutIntern = ({ className, children }) => {
  return (
    <main
      className={`col-span-4 bg-primary-grey-700 py-14 px-4 md:col-span-8 md:px-8 lg:col-span-10 lg:col-start-3 ${className}`}
    >
      {children}
    </main>
  );
};
