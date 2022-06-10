export const Label = ({ label, htmlFor, className }) => {
  return (
    <div className="flex mb-2">
      <label
        htmlFor={htmlFor}
        className={`text-paragraph-02 font-semibold ${className} `}
      >
        {label}
      </label>
    </div>
  );
};
