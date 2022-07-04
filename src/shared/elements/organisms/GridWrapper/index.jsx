export const GridWrapper = ({ className, children }) => {
  // max-w-[1736px] lg:w-[calc(100%-60px)
  return (
    <div className={className}>
      <div className=" mx-auto h-full w-full ">
        <div className="content-grid">{children}</div>
      </div>
    </div>
  );
};
