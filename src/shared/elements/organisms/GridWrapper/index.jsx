export const GridWrapper = ({ className, children }) => (
  <div className={className}>
    <div className="h-full mx-auto w-full md:w-[calc(100%-5rem)] lg:w-[calc(100%-120px)] max-w-[1736px]">
      <div className="content-grid">{children}</div>
    </div>
  </div>
)
