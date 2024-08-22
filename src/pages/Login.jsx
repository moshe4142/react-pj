import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../componants/Header';
import Footer from '../componants/Footer';

// const Login = () => {
//     const [isSignIn, setIsSignIn] = useState(true);
//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const navigate = useNavigate();

//     const handleToggle = () => {
//         setIsSignIn(!isSignIn);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!isSignIn) {
//             // Sign Up Logic
//             if (password !== confirmPassword) {
//                 alert('Passwords do not match!');
//                 return;
//             }

//             // Send data to your backend API (this is just an example)
//             const response = await fetch('/api/signup', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, username, password }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 alert('Sign Up successful!');
//                 setIsSignIn(true); // Switch to Sign In after successful Sign Up
//             } else {
//                 alert(`Sign Up failed: ${data.message}`);
//             }
//         } else {
//             // Sign In Logic
//             // Handle sign in similarly
//         }
//     };

//     return (
//         <div>
//             <Header bgColor="purple-100" titleColor="black" title={isSignIn ? "Log in" : "Sign Up"} />

//             <div className='mt-[230px] mb-[160px] bg-gray-50 w-[500px] h-[500px] m-auto text-black rounded-l shadow-lg relative overflow-hidden'>
//                 <div className='w-[100%] bg-green-600 h-[5px]'></div>

//                 {/* Toggle Buttons */}
//                 <div className='absolute top-4 right-4'>
//                     <button
//                         onClick={handleToggle}
//                         className={`px-4 py-2 rounded ${isSignIn ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//                     >
//                         {isSignIn ? 'Sign Up' : 'Sign In'}
//                     </button>
//                 </div>

//                 {/* Forms Container */}
//                 <div className='relative w-full h-full'>
//                     {isSignIn && (
//                         <div className='absolute inset-0'>
//                             <h2 className='text-2xl pt-[50px] mx-[41px]'>Sign In</h2>
//                             <form className='w-[400px] p-[40px]' onSubmit={handleSubmit}>
//                                 <div className="mb-4">
//                                     <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700"
//                                         placeholder="Enter your email"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
//                                     <input
//                                         type="text"
//                                         id="username"
//                                         value={username}
//                                         onChange={(e) => setUsername(e.target.value)}
//                                         className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700"
//                                         placeholder="Enter your username"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-6">
//                                     <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//                                     <input
//                                         type="password"
//                                         id="password"
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700"
//                                         placeholder="Enter your password"
//                                         required
//                                     />
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 >
//                                     Sign In
//                                 </button>
//                             </form>
//                         </div>
//                     )}

//                     {!isSignIn && (
//                         <div className='absolute inset-0'>
//                             <h2 className='text-2xl pt-[50px]'>Sign Up</h2>
//                             <form className='w-[400px] p-[40px]' onSubmit={handleSubmit}>
//                                 <div className="mb-4">
//                                     <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700"
//                                         placeholder="Enter your email"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
//                                     <input
//                                         type="text"
//                                         id="username"
//                                         value={username}
//                                         onChange={(e) => setUsername(e.target.value)}
//                                         className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700"
//                                         placeholder="Enter your username"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-6">
//                                     <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//                                     <input
//                                         type="password"
//                                         id="password"
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700"
//                                         placeholder="Enter your password"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-6">
//                                     <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
//                                     <input
//                                         type="password"
//                                         id="confirmPassword"
//                                         value={confirmPassword}
//                                         onChange={(e) => setConfirmPassword(e.target.value)}
//                                         className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700"
//                                         placeholder="Confirm your password"
//                                         required
//                                     />
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 >
//                                     Sign Up
//                                 </button>
//                             </form>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// }

// export default Login;




const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log("Logging in...");
        } else {
            console.log("Registering...");
        }
    };

    return (
        <>
            <Header title="Login" />
            <div className='flex justify-center'>
                <div className="mt-[220px] mb-[150px] bg-white p-6 rounded-lg shadow-lg w-full max-w-lg flex justify-center">
                    <div className="w-full">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                            {isLogin ? "Login" : "Register"}
                        </h2>
                        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
                            {!isLogin && (
                                <>
                                    <div className="col-span-1">
                                        <label className="block text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full mt-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-gray-700">Username</label>
                                        <input
                                            type="text"
                                            className="w-full mt-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-gray-700">Phone Number</label>
                                        <input
                                            type="text"
                                            className="w-full mt-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-gray-700">Address</label>
                                        <input
                                            type="text"
                                            className="w-full mt-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-gray-700">Date of Birth</label>
                                        <input
                                            type="date"
                                            className="w-full mt-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </>
                            )}
                            <div className={`col-span-${isLogin ? 2 : 1}`}>
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="w-full mt-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className={`col-span-${isLogin ? 2 : 1}`}>
                                <label className="block text-gray-700">Password</label>
                                <input
                                    type="password"
                                    className="w-full mt-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {!isLogin && (
                                <div className="col-span-2">
                                    <label className="block text-gray-700">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="w-full mt-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            )}
                            <div className="col-span-2">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                                >
                                    {isLogin ? "Login" : "Register"}
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 text-center">
                            <button
                                className="text-blue-500 hover:underline"
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin ? "Create an account" : "Already have an account? Login"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
