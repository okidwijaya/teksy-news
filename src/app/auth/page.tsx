'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signUp, login } from '@/lib/auth';
import LoadingLogoDefault from '@/components/Loading';
import Link from 'next/link';

interface UserSession {
    access_token: string;
}

export default function Page() {
    const [isTnC, setTnC] = useState(false);
    const [storedValue, setStoredValue] = useState<UserSession | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthLoading, setIsAuthLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    // const [confrimPassword, setConfrimPassword] = useState("");


    useEffect(() => {
        const value = localStorage.getItem('userSessionTeksy');
        try {
            const parsed = value ? JSON.parse(value) : null;
            setStoredValue(parsed);
        } catch (e) {
            console.error('Failed to parse userSession:', e);
            setStoredValue(null);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!isLoading && storedValue && storedValue.access_token) {
            router.push('/');
        }
    }, [isLoading, storedValue, router]);


    const handleSignin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsAuthLoading(true);
        try {
            const result = await login(email, password);
            localStorage.setItem("userSessionTeksy", JSON.stringify(result.session));
            setTimeout(() => {
                setIsAuthLoading(true);
                router.push('/');
            }, 3500)
        } catch (e: unknown) {
            const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred';
            alert('Error: ' + errorMessage);
        } finally {
            setIsAuthLoading(false);
        }
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsAuthLoading(true);
        if (isTnC) {
            try {
                const result = await signUp(email, password, fullName);
                alert('Signup successful! Auto-logged in!');
                console.log('singup',result)
                setTimeout(() => {
                    router.push('/');
                }, 3500)
            } catch (e: unknown) {
                const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred';
                alert('Error: ' + errorMessage);
            } finally {
                setIsAuthLoading(false);
            }
        } else {
            setIsAuthLoading(false);
            alert('please check the tnc')
        }
    };

    const tncAgreement = () => {
        setTnC(!isTnC);
    }

    // useEffect(() => {
    //     setConfrimPassword("")
    //     console.log(confrimPassword)
    // }, [])

    return (
        <div className="flex items-center justify-center px-4 h-screen bg-white">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
                <div className="flex flex-row-reverse justify-between items-start mb-4 gap-2">
                    <Link href="/" className='w-fit'>
                        <LoadingLogoDefault />
                    </Link>
                    <div className="flex justify-center mb-2 gap-2">
                        <button
                            type="button"
                            className={`py-0 px-0 cursor-pointer font-medium ${isLogin ? 'border-b-2 border-[#6B57E4] text-[#6B57E4] font-semibold' : 'text-gray-500'}`}
                            onClick={() => setIsLogin(true)}
                        >
                            Sign In
                        </button>
                        <button
                            type="button"
                            className={`py-2 px-0 cursor-pointer font-medium ${!isLogin ? 'border-b-2 border-[#6B57E4] text-[#6B57E4] font-semibold' : 'text-gray-500'}`}
                            onClick={() => setIsLogin(false)}
                        >
                            Register
                        </button>
                    </div>
                </div>


                {isLogin ? (
                    <>
                        <form
                            onSubmit={handleSignin}>
                            <div>
                                <label className="block text-[12px] font-semibold text-[#212121]">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="text-[12px] text-[#212121] mt-1 w-full px-4 py-2 border rounded-md" />
                            </div>
                            <div>
                                <label className="block text-[12px] font-semibold text-[#212121]">Password</label>
                                <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} className="text-[12px] text-[#212121] mt-1 w-full px-4 py-2 border rounded-md" />
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center text-[#212121]">
                                    <input type="checkbox" className="text-[12px] text-[#212121] mr-2" />
                                    Remember me
                                </label>
                            </div>
                            <button type="submit" className="w-full bg-[#212121] text-white py-2 rounded-md hover:bg-black">
                                {isAuthLoading ? "wait" : "Sign In"}
                            </button>
                        </form>
                        <div className="my-4 text-center text-sm text-gray-500">or</div>
                        <div className="space-y-2">
                            <button className="w-full border py-2 rounded-md flex items-center justify-center hover:bg-gray-200 text-[#212121]">
                                <svg className='w-5 h-5 mr-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                                {isAuthLoading ? "wait" : "Sign in with Google"}
                            </button>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center hover:bg-blue-700">
                                <svg className='w-5 h-5 mr-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                                </svg>
                                {isAuthLoading ? "wait" : "Sign in with Facebook"}
                            </button>
                            <button className="w-full bg-white text-[#212121] py-2 rounded-md flex items-center justify-center hover:bg-gray-200 border border-[#212121]">
                                <svg className='w-5 h-5 mr-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                                    <path d="M20.185,15.673v0.017c-0.465,1.027-0.699,1.493-1.299,2.408c-0.845,1.285-2.033,2.887-3.507,2.898	c-1.308,0.009-1.648-0.856-3.424-0.84C10.18,20.164,9.81,21.014,8.498,21c-1.471-0.014-2.598-1.457-3.442-2.74	c-2.359-3.596-2.609-7.809-1.15-10.052c1.03-1.59,2.664-2.524,4.197-2.524c1.563,0,2.543,0.858,3.835,0.858	c1.253,0,2.015-0.858,3.821-0.858c1.358,0,2.812,0.735,3.844,2.005V7.71C16.748,9.85,16.983,13.732,20.185,15.673z M14.096,3.901	C14.682,3.148,15.127,2.084,14.967,1h-0.098c-0.935,0.099-2.003,0.705-2.635,1.47c-0.592,0.722-1.084,1.792-0.892,2.829	C12.386,5.332,13.469,4.708,14.096,3.901z"></path>
                                </svg>
                                {isAuthLoading ? "wait" : "Sign in with Apple"}
                            </button>
                        </div>
                    </>
                ) : (
                    <form className="space-y-4"
                        onSubmit={handleSignup}>
                        <div>
                            <label className="block text-[12px] font-semibold text-[#212121]">Full Name</label>
                            <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" className="text-[12px] text-[#212121] mt-1 w-full px-4 py-2 border rounded-md" />
                        </div>
                        <div>
                            <label className="block text-[12px] font-semibold text-[#212121]">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="text-[12px] text-[#212121] mt-1 w-full px-4 py-2 border rounded-md" />
                        </div>
                        <div>
                            <label className="block text-[12px] font-semibold text-[#212121]">Password</label>
                            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} className="text-[12px] text-[#212121] mt-1 w-full px-4 py-2 border rounded-md" />
                        </div>
                        <div className="hidden">
                            <label className="block text-[12px] font-semibold text-[#212121]">Confirm Password</label>
                            <input type="password" className="text-[12px] text-[#212121] mt-1 w-full px-4 py-2 border rounded-md" />
                        </div>
                        <div className="flex items-start">
                            <input onClick={tncAgreement} type="checkbox" className="mt-1 mr-2" />
                            <span className="text-sm text-[#212121]">I agree to the <a href="#" className="text-blue-600 underline">Terms & Conditions</a></span>
                        </div>
                        <button type="submit" className="w-full bg-[#212121] text-white py-2 rounded-md hover:bg-gray-200">
                            {isAuthLoading ? "wait" : "Register"}
                        </button>
                    </form>
                )}

                <p className="mt-6 text-center text-xs text-gray-400">&copy; 2023 Airspace Corporation</p>
            </div>
        </div>
    );
}