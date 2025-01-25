// src/context/ContextProvider.tsx
import { ENDPOINTS, API_BASE_URL } from "@/api/config";
import React, { createContext, useContext, useReducer, Dispatch } from "react";

type AuthState = {
  user: null | {
    id: string;
    email: string;
    name: string;
    role: string;
    profilePictureUrl?: string;
  };
  isAuthenticated: boolean;
  isLoading: boolean;
  queueStatus: "idle" | "waiting" | "matched";
  error: string | null;
};

type Action =
  | { type: "SET_USER"; payload: AuthState["user"] }
  | { type: "SET_AUTH"; payload: boolean }
  | { type: "SET_QUEUE_STATUS"; payload: AuthState["queueStatus"] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  queueStatus: "idle",
  error: null,
};

const reducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_AUTH":
      return { ...state, isAuthenticated: action.payload };
    case "SET_QUEUE_STATUS":
      return { ...state, queueStatus: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const ContextProvider = createContext<{
  state: AuthState;
  dispatch: Dispatch<Action>;
  api: typeof ENDPOINTS;
  baseUrl: string;
}>({
  state: initialState,
  dispatch: () => null,
  api: ENDPOINTS,
  baseUrl: API_BASE_URL,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextProvider.Provider
      value={{ state, dispatch, api: ENDPOINTS, baseUrl: API_BASE_URL }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export const useAuth = () => useContext(ContextProvider);
