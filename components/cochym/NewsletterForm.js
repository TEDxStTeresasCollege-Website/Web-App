import React from "react";

import axios from "axios";
import { useForm } from "react-hook-form";

const NewsLetterForm = ({ gotoNextPage }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      await axios.post("http://localhost:3000/api/data/pre_event", values);
      gotoNextPage();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 m-2 bg-gray-800 rounded-lg bg-opacity-60">
      <div className="grid justify-center grid-cols-2 gap-5">
        <label className="text-xl md:text-2xl">First Name :</label>
        <input
          name="firstName"
          {...register("firstName", {
            required: { value: true, message: "First name is required" },
            maxLength: { value: 50, message: "Name is too long." },
            minLength: { value: 2, message: "Name is too short." },
          })}
          type="firstname"
          className="px-4 text-gray-900 rounded-sm"
        ></input>
        <span className="py-2 text-sm text-red-400">
          {errors?.firstName?.message}
        </span>
        <span></span>

        <label className="text-xl md:text-2xl">Last Name :</label>
        <input
          name="lastName"
          {...register("lastName", {
            required: { value: true, message: "Last name is required" },
            maxLength: { value: 50, message: "Last Name too long." },
            minLength: { value: 2, message: "Last Name too short." },
          })}
          type="lastname"
          className="px-4 text-gray-900 rounded-sm"
        ></input>
        <span className="py-2 text-sm text-red-400">
          {errors.lastName?.message}
        </span>
        <span></span>

        <label className="text-xl md:text-2xl">Mobile Number (+91) :</label>
        <input
          name="mobile"
          {...register("mobile", {
            required: {
              value: true,
              message: "Mobile Number is required",
            },
            valueAsNumber: true,
            min: { value: 10, message: "Too short to be a valid number" },
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Valid Mobile Number Required",
            },
          })}
          type="mobile"
          className="px-4 text-gray-900 rounded-sm"
        ></input>
        <span className="py-2 text-sm text-red-400">
          {errors.mobile?.message}
        </span>
        <span></span>

        <label className="text-xl md:text-2xl">Email ID :</label>
        <input
          name="email"
          {...register("emailID", {
            required: {
              value: true,
              message: "Valid Email ID is required",
            },
            maxLength: {
              value: 120,
              message: "You exceeded the maximum limit.",
            },
            minLength: {
              value: 8,
              message: "Too short to be an Email ID",
            },
          })}
          type="emailID"
          className="px-4 text-gray-900 rounded-sm"></input>
        <span className="py-2 text-sm text-red-400">
          {errors?.emailID?.message}
        </span>
        <span></span>

        <label className="text-xl md:text-2xl">Designation :</label>
        <input
          name="designation"
          {...register("designation", {
            required: { value: true, message: "Designation is required" },
            maxLength: { value: 50, message: "Designation is too long." },
            minLength: { value: 5, message: "Designation is too short." },
          })}
          type="designation"
          className="px-4 text-gray-900 rounded-sm"
        ></input>
        <span className="py-2 text-sm text-red-400">
          {errors?.designation?.message}
        </span>
        <span></span>

        <label className="text-xl md:text-2xl">Institution Name :</label>
        <input
          name="institution"
          {...register("institution", {
            required: {
              value: true,
              message: "Institution name is required",
            },
            maxLength: { value: 50, message: "Name is too long." },
            minLength: { value: 1, message: "Name is too short." },
          })}
          type="institution"
          className="px-4 text-gray-900 rounded-sm"
        ></input>
        <span className="py-2 text-sm text-red-400">
          {errors?.institution?.message}
        </span>
        <span></span>
      </div>
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

export default NewsLetterForm;
