"use client";

import Clarity from "@microsoft/clarity";
import { useEffect } from "react";

const clarityProjectId = "z1owjontpg";

export default function ClarityAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      Clarity.init(clarityProjectId);
    }
  }, []);

  return null;
}
