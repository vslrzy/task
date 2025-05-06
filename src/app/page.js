"use client";

import Services from "@/partials/services";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Services />
    </Suspense>
  );
}
