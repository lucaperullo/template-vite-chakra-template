// src/components/ui/IconMask.js
import { Icon } from "@chakra-ui/react";
import React from "react";

/**
 * IconMask Component
 *
 * A reusable component that wraps React Icons with Chakra UI's Icon component.
 *
 * @param {object} props - Props passed to the Icon component.
 * @param {React.ReactNode} props.children - The React Icon to display.
 * @returns {JSX.Element} The styled icon component.
 */
const IconMask = ({ children, ...props }) => {
  return <Icon {...props}>{children}</Icon>;
};

export default IconMask;
