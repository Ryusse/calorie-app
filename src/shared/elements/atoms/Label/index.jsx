export const Label = ({
  label,
  htmlFor,
  classNameLabel,
  classNameLabelContainer,
}) => {
  return (
    <div className={`mb-2 flex ${classNameLabelContainer}`}>
      <label
        htmlFor={htmlFor}
        className={`text-paragraph-02 font-semibold ${classNameLabel} `}
      >
        {label}
      </label>
    </div>
  );
};
