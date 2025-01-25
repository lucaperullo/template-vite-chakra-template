"use client";

import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { Field } from "@/components/ui/field";
import { toaster } from "@/components/ui/toaster";

export const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    role: "user",
    interests: "",
    bio: "",
    profilePicture: null as File | null,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formPayload = new FormData();
      formPayload.append("email", formData.email);
      formPayload.append("password", formData.password);
      formPayload.append("name", formData.name);
      formPayload.append("role", formData.role);
      formPayload.append("interests", formData.interests);
      formPayload.append("bio", formData.bio);
      if (formData.profilePicture) {
        formPayload.append("profilePicture", formData.profilePicture);
      }

      const response = await axios.post(
        "http://localhost:5111/api/auth/register",
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toaster.create({
        description: response.data.message,
        type: "success",
        duration: 5000,
      });
      navigate("/login");
    } catch (error) {
      toaster.create({
        description: error.response?.data?.message || "An error occurred",
        type: "error",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        profilePicture: e.target.files[0],
      });
    }
  };

  return (
    <Box p={4} maxW="600px" mx="auto">
      <Heading mb={6} textAlign="center">
        Create Account
      </Heading>

      <form onSubmit={handleSubmit}>
        <VStack gap="8">
          <Field label="Email" required>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </Field>

          <Field label="Password" required>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </Field>

          <Field label="Full Name" required>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </Field>

          {/* <Field label="Role" required>
            <Select name="role" value={formData.role} onChange={handleChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Select>
          </Field> */}

          <Field label="Interests (comma separated)">
            <Input
              type="text"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              placeholder="e.g., music, sports, technology"
            />
          </Field>

          <Field label="Bio">
            <Textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself"
            />
          </Field>

          <Field label="Profile Picture">
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              p={1}
            />
          </Field>

          <Button type="submit" variant="solid" size="lg" width="full">
            Create Account
          </Button>

          <Button asChild variant="outline" width="full">
            <Link to="/login">Already have an account? Login</Link>
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
