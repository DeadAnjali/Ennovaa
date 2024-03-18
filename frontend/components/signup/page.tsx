"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        firstName: "",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false)

    const onSignup = async () => {
        console.log("function working....")
        try{
            const response = await axios.post("http://localhost:5000/api/users/register", user);
            console.log("signup success", response.data);
            router.push("/login");
        }catch(error : any){
            console.log("sign up failed", error.message)
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.firstName.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input className="p-2 border border-seafoam rounded-lg mb-4 focus:outline-none focus:border-smoky text-midnight"
                id="username"
                type="text"
                value={user.firstName}
                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                placeholder="username"
            />
            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-seafoam rounded-lg mb-4 focus:outline-none focus:border-smoky text-midnight"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />
          
            <label htmlFor="password">password</label>
            <input
                className="p-2 border border-seafoam rounded-lg mb-4 focus:outline-none focus:border-smoky text-midnight"
                id="passwords"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />
            <button
                onClick={onSignup}
                className="p-2 border border-seafoam rounded-lg mb-4 focus:outline-none focus:border-smoky text-seafoam">
                signup
            </button>
            <Link href="/login">visit login page</Link>
        </div>
    )
}