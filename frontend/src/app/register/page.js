"use client";
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const router = useRouter();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL; // your API base URL
    const registerUrl = 'api/register'; // endpoint path
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false); // ✅ loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(fname);
        console.log(lname);
        console.log(email);
        console.log(contact);
        console.log(password);
        console.log(confirmPassword);
        try {
            const res = await axios.post(`${apiUrl}${registerUrl}`, {
                fname: fname,
                lname: lname,
                email: email,
                contact: contact,
                password: password,
                password_confirmation: confirmPassword
            });
            console.log(res);
            console.log(res.data);
            if (res.data.status === true) {
                setSuccess(res.data.message);
                setTimeout(() => {
                    router.push('/login');
                }, 3000);
            } else {
                setError(res.data.message);
            }
        } catch (err) {
            setError(err.response.data.message || 'Registration failed');
        }
    }
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-2xl/9 font-bold tracking-tight text-white">Sign up to your account</h2>
                    {/* Popup Messages */}
                    {error && (
                        <div className="mb-4 p-3 text-center rounded bg-rose-500 text-white font-medium animate-fade w-11/12 mx-auto">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="mb-4 p-3 text-center rounded bg-indigo-500 text-white font-medium animate-fade w-11/12 mx-auto">
                            {success}
                        </div>
                    )}
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm/6 font-medium text-gray-100">First Name</label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="fname"
                                    required
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm/6 font-medium text-gray-100">Last Name</label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="lname" required
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">Email address</label>
                            <div className="mt-2">
                                <input id="email" type="email" name="email" required
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="text" className="block text-sm/6 font-medium text-gray-100">Mobile Number</label>
                            <div className="mt-2">
                                <input id="number" type="number" name="number" required
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">Password</label>
                            </div>
                            <div className="mt-2">
                                <input id="password" type="password" name="password" required
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="confirm-password" className="block text-sm/6 font-medium text-gray-100">Confirm Password</label>
                            </div>
                            <div className="mt-2">
                                <input type="password" required
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-400">
                        Have you account?
                        <span onClick={() => router.push('/login')} className="font-semibold text-indigo-400 hover:text-indigo-300">
                            Sign In
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}