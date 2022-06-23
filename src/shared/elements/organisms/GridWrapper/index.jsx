export const GridWrapper = ({ className, children }) => (
  <div className={className}>
    <div className="lg:w-[calc(100%-60px) mx-auto h-full w-full max-w-[1736px] ">
      <div className="content-grid">{children}</div>
    </div>
  </div>
);
