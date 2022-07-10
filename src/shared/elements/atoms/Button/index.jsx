export const Button = ({
  disabled = false,
  onClick,
  classButton = 'primary',
  className,
  children,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full cursor-pointer rounded-[5px] border-none py-2 px-2 text-center font-medium outline-none button-${classButton} ${className}`}
    >
      {children}
    </button>
  );
};
