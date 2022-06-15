export const Label = ({ label, htmlFor, className }) => {
  return (
    <div className="mb-2 flex">
      <label
        htmlFor={htmlFor}
        className={`text-paragraph-02 font-semibold ${className} `}
      >
        {label}
      </label>
    </div>
  );
};
