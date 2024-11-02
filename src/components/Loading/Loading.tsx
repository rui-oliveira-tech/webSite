"use client";

import React from "react";
import "./Loading.scss";
import LoadingIcon from "./LoadingIcon";

interface LoadingProps {}

export default function Loading(props: LoadingProps) {
  return (
    <div className="containerLoading">
      <LoadingIcon {...props} />
    </div>
  );
}
