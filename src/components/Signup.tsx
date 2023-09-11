"use client";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState("");
  const { setAuthStatus } = useAuth();

  const create = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = await appwriteService.createUserAccount(formData);

      if (userData) {
        setAuthStatus(true);
        router.push("/profile");
        console.log("userData", userData);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
    </div>
  );
};

export default Signup;
