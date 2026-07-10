const ErrorMessage = ({ message }) => {
  return (
    <div className="mx-auto my-10 max-w-xl rounded-lg border border-red-200 bg-red-50 p-6 text-center">
      <h2 className="text-xl font-semibold text-red-700">
        Something went wrong
      </h2>

      <p className="mt-2 text-red-600">{message}</p>
    </div>
  );
};

export default ErrorMessage;