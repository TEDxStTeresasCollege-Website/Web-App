import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Head from "next/head"
import Image from "next/image"
import { useForm } from "react-hook-form";
import { triggerFocus } from 'antd/lib/input/Input';
import axios from 'axios';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);


export default function Cochym() {


  const { register, handleSubmit, watch, formState: { errors } } = useForm() 
  
  
   async function onSubmit(values) {
    let config = {
      method: `POST`,
      url: `http://localhost:3000/api/data/pre_event`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: values,
    };
    try{
      const response = await axios(config);
      if(response.data.status == 200){
        console.log('Success');
      }
    }catch {
      console.error();
    }
    
  }

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  

 

  return (
    
    <>
    
    <Head>
        <title>Cochym : TEDxStTeresasCollege</title>
        <meta name="description" content="Cochym : TEDxStTeresasCollege" />
        <link rel="icon" href="logo.ico" />
    </Head>

    <Navbar />

    <div className="min-h-screen bg-night-sky bg-repeat-y bg-black text-white pt-40 flex flex-col justify-center items-center sans">
        <h1 className="text-center text-2xl lg:text-4xl text-ted-red serif block mb-20">Pre-Event Registration Form</h1>
        <div className="">
            <Image className="" src="/cochymLogo.png" width="700" height="250" layout="intrinsic"></Image>
        </div>

        <div className="w-1/2 mx-auto mt-50">
            <form onSubmit={handleSubmit(onSubmit)} action="/api/checkout/session" method="POST" className="bg-gray-800 p-6 rounded-lg m-2 bg-opacity-60">
                <div className="grid grid-cols-2 gap-5 justify-center">
                    <label className="text-xl md:text-2xl">First Name :</label>
                    <input name="firstName" 
                    {...register("firstName", { required: { value: true, message:"First name is required" }, 
                      maxLength:{value:50, message:"Name is too long."}, 
                      minLength:{ value:2, message:"Name is too short."}
                    })}
                    type="firstname"  className="rounded-sm text-gray-900 px-4"></input>
                    <span className='text-red-400 text-sm py-2'>
                    {errors?.firstName?.message}
                    </span>
                    <span></span>

                    <label className="text-xl md:text-2xl">Last Name :</label>
                    <input name="lastName"
                    {...register("lastName", { required: { value: true, message:"Last name is required" },
                      maxLength:{value:50, message:"Last Name too long."}, 
                      minLength:{ value:2, message:"Last Name too short."}
                    })}
                    type="lastname" className="rounded-sm text-gray-900 px-4"></input>
                    <span className='text-red-400 text-sm py-2'>
                    {errors.lastName?.message}
                    </span>
                    <span></span>

                    <label className="text-xl md:text-2xl">Mobile Number :</label>
                    <input name="mobile"
                    {...register("mobile", {required: { value: true, message:"Mobile Number is required" },  
                    maxLength:{value:12, message:"Valid Mobile Number Required"}, 
                    minLength:{ value:8, message:"Valid Mobile Number Required"}
                    })}
                    type="mobile" className="rounded-sm text-gray-900 px-4"></input>
                    <span className='text-red-400 text-sm py-2'>
                    {errors.mobile?.message}
                    </span>
                    <span></span>

                    <label className="text-xl md:text-2xl">Email ID :</label>
                    <input name="email" 
                    {...register("emailID", { required: { value: true, message:"Valid Email ID is required" },
                      maxLength:{value:120, message:"You exceeded the maximum limit."}, 
                      minLength:{ value:8, message:"Too short to be an Email ID"}
                    })}
                    type="emailID"  className="rounded-sm text-gray-900 px-4"></input>
                    <span className='text-red-400 text-sm py-2'>
                    {errors?.emailID?.message}
                    </span>
                    <span></span>

                    <label className="text-xl md:text-2xl">Designation :</label>
                    <input name="designation" 
                    {...register("designation", { required: { value: true, message:"Designation is required" }, 
                      maxLength:{value:50, message:"Designation is too long."}, 
                      minLength:{ value:5, message:"Designation is too short."}
                    })}
                    type="designation" className="rounded-sm text-gray-900 px-4"></input>
                    <span className='text-red-400 text-sm py-2'> 
                    {errors?.designation?.message}
                    </span>
                    <span></span>

                    <label className="text-xl md:text-2xl">Institution Name :</label>
                    <input name="institution"
                    {...register("institution", { required: { value: true, message:"Institution name is required" }, 
                      maxLength:{value:50, message:"Name is too long."}, 
                      minLength:{ value:1, message:"Name is too short."}
                    })}
                    type="institution" className="rounded-sm text-gray-900 px-4"></input>
                    <span className='text-red-400 text-sm py-2'>
                    {errors?.institution?.message}
                    </span>
                    <span></span>

                </div>
                <div className="mt-10 flex justify-center">
                    <input type="submit" value="Submit" className="bg-ted-red text-white font-bold py-2 px-4 rounded w-1/3"></input>
                </div>
            </form>
        </div>
    </div>

    <Footer />
</>
  );
}