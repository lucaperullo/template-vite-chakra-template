// src/components/Login.tsx
"use client";

import { Box, Button, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Field } from "@/components/ui/field";
import { toaster } from "@/components/ui/toaster";
import axios from "axios";
import { useAuth } from "@/context";

export const Login = () => {
  const { state, dispatch, api, baseUrl } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });

    try {
      const response = await axios.post(
        `${baseUrl}${api.AUTH.LOGIN}`,
        credentials
      );

      dispatch({ type: "SET_USER", payload: response.data.user });
      dispatch({ type: "SET_AUTH", payload: true });
      localStorage.setItem("token", response.data.token);

      toaster.create({
        description: "Login successful!",
        type: "success",
        duration: 5000,
      });
      navigate("/dashboard");
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.response?.data?.message || "Login failed",
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return (
    <Box p={4} maxW="600px" mx="auto">
      <Heading mb={6} textAlign="center">
        Welcome Back
      </Heading>

      <form onSubmit={handleLogin}>
        <VStack gap="8">
          <Field label="Email" required>
            <Input
              type="email"
              name="email"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              placeholder="Enter your email"
            />
          </Field>

          <Field label="Password" required>
            <Input
              type="password"
              name="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              placeholder="Enter password"
            />
          </Field>

          <Button type="submit" variant="solid" size="lg" width="full">
            Sign In
          </Button>

          <Button asChild variant="outline" width="full">
            <Link to="/register"> Don't have an account? Create Account</Link>
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
