"use client";

import type { ReactNode } from "react";
import { Preloader } from "@/components/layout/Preloader";

/**
 * Client shell: full-screen preloader overlays children until first load completes
 * (once per browser tab session). Keeps the rest of the layout as server-friendly children.
 */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Preloader />
    </>
  );
}
