import { ErrorMessage, Field } from "formik";

type InputProps = {
  type: string;
  labelName: string;
};

const Input = ({ type, labelName }: InputProps) => {
  return (
    <div>
      <label
        htmlFor={type}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {labelName}
      </label>
      <div className="mt-2">
        <Field
          id={type}
          type={type}
          name={type}
          className="outline-none block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <ErrorMessage component='p' name={type} className="text-red-500 font-semibold mt-2 text-sm"/>
      </div>
    </div>
  );
};

export default Input;
