export const Button = ({
  type = 'button',
  disabled = false,
  onClick,
  classButton,
  className,
  children,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`cursor-pointer border border-solid text-center outline-none font-medium w-full rounded-[5px] py-2     px-2 button-${classButton} ${className}`}
    >
      {children}
    </button>
  );
};
