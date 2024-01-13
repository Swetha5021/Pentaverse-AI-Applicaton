"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("ab67dd3d-bebb-447b-8d02-fa96205fc26b");
  }, []);

  return null;
};