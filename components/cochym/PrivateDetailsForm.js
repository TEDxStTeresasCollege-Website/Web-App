import React from "react";

import axios from "axios";
import { useForm } from "react-hook-form";

const PrivateDetailsForm = ({ gotoNextPage }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      // await axios.post("http://localhost:3000/api/data/private", values);
      gotoNextPage();
    } catch (error) {
      console.error(error);
    }
  };

  const fields = [
    {
      name: "fullName",
      label: "Full Name",
      validations: {
        required: { value: true, message: "Full name is required." },
        maxLength: { value: 100, message: "Cannot exceed 100 characters." },
        minLength: { value: 2, message: "Full name is too short." },
      },
      errors: errors?.firstName?.message,
    },
    {
      name: "aadhar",
      label: "Aadhar Number",
      validations: {
        required: { value: true, message: "Aadhar number is required." },
      },
      errors: errors?.aadhar?.message,
    },
    {
      name: "mobile",
      label: "Mobile Number",
      validations: {
        required: { value: true, message: "Mobile number is required." },
      },
      errors: errors?.mobile?.message,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action="/api/checkout/session"
      method="POST"
      className="p-6 m-2 bg-gray-800 rounded-lg bg-opacity-60"
    >
      <span className="grid justify-center grid-cols-2 gap-5">
        {fields.map((field) => (
          <React.Fragment key={field.name}>
            <label className="text-xl md:text-2xl">{field.label} :</label>
            <input
              name={field.name}
              {...register(field.name, field.validations)}
              className="px-4 text-gray-900 rounded-sm"
            />
            <span className="py-2 text-sm text-red-400">{field.errors}</span>
            <span />
          </React.Fragment>
        ))}
      </span>
      <div className="flex justify-center mt-10">
        <button
          type="submit"
          className="w-1/3 px-4 py-2 font-bold text-white rounded bg-ted-red"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default PrivateDetailsForm;
