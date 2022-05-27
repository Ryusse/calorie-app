export const Button = ({
  disabled,
  onClick,
  classButton = 'primary-outline',
  className,
  children,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`cursor-pointer border border-solid text-center outline-none font-medium w-full rounded-[5px] py-1     px-2 button-${classButton} ${className}`}
    >
      {children}
    </button>
  )
}
