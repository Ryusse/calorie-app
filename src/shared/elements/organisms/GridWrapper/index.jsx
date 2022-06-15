export const GridWrapper = ({ className, children }) => (
  <div className={className}>
    {/* md:w-[calc(100%-5rem)] lg:w-[calc(100%-60px)] max-w-[1736px] */}
    <div className="mx-auto h-full w-full max-w-[1736px] md:w-[calc(100%-2rem)] lg:w-full">
      <div className="content-grid">{children}</div>
    </div>
  </div>
);
