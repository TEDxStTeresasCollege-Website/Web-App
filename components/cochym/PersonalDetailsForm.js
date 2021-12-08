import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const PersonalDetailsForm = ({ gotoNextPage }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      await axios.post("http://localhost:3000/api/data/cochym_reg", values);
      gotoNextPage();
    } catch (error) {
      console.error(error);
    }
  };

  const fields = [
    {
      name: "firstName",
      label: "First Name: ",
      validations: {
        required: { value: true, message: "First name is required" },
        maxLength: {
          value: 50,
          message: "First name is too long",
        },
        minLength: {
          value: 2,
          message: "First name is too short",
        },
      },
      errors: errors?.firstName?.message,
    },
    {
      name: "lastName",
      label: "Last Name: ",
      validations: {
        required: { value: true, message: "Last name is required" },
        maxLength: {
          value: 50,
          message: "Last name is too long",
        },
        minLength: {
          value: 2,
          message: "Last name is too short",
        },
      },
      errors: errors?.lastName?.message,
    },
    {
      name: "mobile",
      label: "Mobile (+91):",
      validations: {
        required: {
          value: true,
          message: "Mobile number is required",
        },
        pattern: {
          value: /^\d{10}$/,
          message: "Mobile number must be valid",
        },
      },
      errors: errors?.mobile?.message,
    },
    {
      name: "email",
      label: "Email: ",
      validations: {
        required: {
          value: true,
          message: "Email id is required",
        },
        pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: "Email id must be valid",
        },
      },
      errors: errors?.email?.message,
    },
    {
      name: "designation",
      label: "Designation: ",
      validations: {
        required: { value: true, message: "Designation is required" },
        maxLength: {
          value: 50,
          message: "Designation is too long",
        },
        minLength: {
          value: 5,
          message: "Designation is too short",
        },
      },
      errors: errors?.designation?.message,
    },
    {
      name: "institution",
      label: "Institution name: ",
      validations: {
        required: {
          value: true,
          message: "Institution name is required",
        },
        maxLength: {
          value: 50,
          message: "Name is too long",
        },
        minLength: {
          value: 1,
          message: "Name is too short",
        },
      },
      errors: errors?.institution?.message,
    },
    {
      name: "aadhar",
      label: "Aadhar number: ",
      validations: {
        required: {
          value: true,
          message: "Aadhar number is required.",
        },
        pattern: {
          value: /^\d{12}$/,
          message: "Aadhar number must be valid",
        },
      },
      errors: errors?.aadhar?.message,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action="/api/checkout/session"
      method="POST"
      className="p-6 m-2 text-center bg-gray-800 rounded-lg bg-opacity-60"
    >
      <div className="grid grid-cols-2 gap-y-5">
        {fields.map((field) => (
          <React.Fragment key={field.name}>
            <label className="text-lg text-left">{field.label}</label>
            <div className="flex flex-col">
              <input
                name={field.name}
                {...register(field.name, field.validations)}
                className="px-2 text-gray-900 rounded-sm"
              />
              <span className="mt-2 text-sm text-left text-red-400">
                {field.errors}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
      <button
        type="submit"
        className="px-4 py-2 mt-6 font-bold text-white rounded bg-ted-red"
      >
        Next
      </button>
    </form>
  );
};

export default PersonalDetailsForm;
