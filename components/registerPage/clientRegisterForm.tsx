import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {NextPage} from "next";
import Link from "next/link";

interface FormValues {
    name: string;
    username: string;
    email: string;
    password: string;
}

const ClientRegisterForm: NextPage = () => {
    const initialValues: FormValues = {
        name: '',
        username: '',
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
            <div className='lg:mt-4 mt-2'>
                <div className='flex  justify-center items-center lg:text-4xl space-x-14 text-2xl mt-8 lg:space-x-24 lg:mb-1 mb-7'>
                    <Link href={'/login'} className='text-gray font-bold'>Login</Link>
                    <Link href={'/register'} className='font-bold text-red'>Register</Link>
                </div>
                <div>
                    <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
                        <Form className=" lg:top-16 lg:w-10/12 w-full lg:h-[570px] lg:p-4 flex flex-col lg:relative lg:left-36 p-3">
                            <div className="">
                                <div>
                                    <label htmlFor="name" className="block lg:text-2xl text-xl mb-2 font-medium text-gray-700">Full
                                        Name</label>
                                    <Field
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="lg:w-9/12 w-full lg:h-14 mb-7 lg:text-2xl  text-xl p-3 border-none bg-light-red border border-gray-300 placeholder-gray-500 placeholder-text text-gray-900 rounded-md"
                                        placeholder="Narmin"
                                    />

                                </div>
                                <div>
                                    <label htmlFor="username"
                                           className="block lg:text-2xl text-xl mb-2 font-medium text-gray-700">Username</label>
                                    <Field
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        required
                                        className="lg:w-9/12 w-full lg:h-14 mb-7 lg:text-2xl text-xl p-3 border-none bg-light-red border border-gray-300 placeholder-gray-500 placeholder-text text-gray-900 rounded-md"
                                        placeholder="Muradzade"
                                    />

                                </div>
                                <div>
                                    <label htmlFor="email"
                                           className="block lg:text-2xl text-xl mb-2 font-medium text-gray-700">Email</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="lg:w-9/12 w-full lg:h-14 mb-7 lg:text-2xl text-xl p-3 border-none bg-light-red border border-gray-300 placeholder-gray-500 placeholder-text text-gray-900 rounded-md"
                                        placeholder="muradzadenermin2@gmail.com"
                                    />

                                </div>
                                <div>
                                    <label htmlFor="password"
                                           className="block lg:text-2xl text-xl lg:mb-7 mb-3 font-medium text-gray-700">Password</label>
                                    <Field
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="lg:w-9/12 w-full lg:h-14 mb-2 lg:text-2xl text-xl p-3 border-none bg-light-red border border-gray-300 placeholder-gray-500 placeholder-text text-gray-900 rounded-md"
                                        placeholder="Password"
                                    />

                                </div>
                            </div>

                            <div>
                                <button type="submit"
                                        className="bg-red w-full h-12 lg:w-9/12 mt-9 flex justify-center py-2 px-4 border border-transparent text-m font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
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

export default ClientRegisterForm;
