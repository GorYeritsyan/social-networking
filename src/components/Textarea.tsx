import { ErrorMessage, Field } from "formik";

type TextAreaProps = {
  title: string;
  placeholder?: string;
  name: string;
  id?: string;
};

const TextArea = ({name, title, placeholder, id }: TextAreaProps) => {
  return (
    <div className="col-span-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <div className="mt-2">
        <Field
          as="textarea"
          id={id}
          name={name}
          rows={3}
          placeholder={placeholder}
          className="outline-none block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={""}
        />
        <ErrorMessage className="text-red-500 font-semibold mt-2 text-sm" component='p' name={name}/>
      </div>
    </div>
  );
};

export default TextArea;
