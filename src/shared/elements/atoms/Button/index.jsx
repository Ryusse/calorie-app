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
      className={`w-full cursor-pointer rounded-[5px] border border-solid py-2 px-2 text-center font-medium outline-none button-${classButton} ${className}`}
    >
      {children}
    </button>
  );
};
