const Input = ({
  as = "input",
  label,
  error,
  className = "",
  ...props
}) => {
  const Component = as;

  return (
    <div className="mb-4">
      {label && <label className="mb-2 block font-medium">{label}</label>}

      <Component
        {...props}
        className={`w-full rounded border p-3 ${className}`}
      />

      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;