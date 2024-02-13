import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {NextPage} from "next";
import Link from "next/link";

interface FormValues {
    email: string;
    password: string;
}

const ClientloginPage :NextPage = () => {
    const initialValues: FormValues = {
        email: '',
        password: '',
    };

    const validate = (values: FormValues) => {
        console.log(values)
    };

    const handleSubmit = async (values: FormValues) => {
        console.log(values);
    };

    return (
        <>
            <div className='lg:mt-4'>
                <div className='flex lg:ml-64 items-center lg:justify-start justify-center lg:text-4xl lg:space-x-24 space-x-14 mb-1 lg:mt-0 mt-11 text-xl'>
                    <Link href={'/login'} className='text-gray font-bold'>Login</Link>
                    <Link href={'/register'} className='font-bold text-red'>Register</Link>
                </div>
                <div>
                    <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
                        <Form className=" lg:top-16 lg:w-10/12  lg:h-[570px] p-4 flex flex-col lg:relative lg:left-36">
                            <div className="">
                                <div>
                                    <label htmlFor="email"
                                           className="block lg:text-2xl text-xl mb-2 font-medium text-gray-700">Email</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="lg:w-9/12 w-full lg:h-14 mb-7 lg:text-2xl p-3 border-none bg-light-red border border-gray-300 placeholder-gray-500 placeholder-text text-gray-900 rounded-md"
                                        placeholder="muradzadenermin2@gmail.com"
                                    />

                                </div>
                                <div>
                                    <label htmlFor="password"
                                           className="block lg:text-2xl text-xl mb-2 font-medium text-gray-700">Password</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="lg:w-9/12 w-full lg:h-14 mb-7 lg:text-2xl p-3 border-none bg-light-red border border-gray-300 placeholder-gray-500 placeholder-text text-gray-900 rounded-md"
                                        placeholder="Password"
                                    />

                                </div>
                            </div>

                            <div>
                                <button type="submit"
                                        className="bg-red h-12 lg:w-9/12 w-full mt-9 flex justify-center py-2 px-4 border border-transparent text-m font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default ClientloginPage;
