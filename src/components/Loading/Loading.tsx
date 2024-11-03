"use client";

import React, { Children } from "react";
import "./Loading.scss";
import LoadingIcon from "./LoadingIcon";
import { useLoadingAnimation } from "@/hooks/useLoadingAnimation"; // Import the hook

interface ILoadingProps {
  children: React.ReactNode;
}

export default function Loading(props: ILoadingProps) {
  const { loading } = useLoadingAnimation("20s", 2500); // Customize delay as needed for this component

  return loading ? (
    <div className="containerLoading">
      <LoadingIcon />
    </div>
  ) : (
    props.children
  );
}
