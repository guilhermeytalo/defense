import type { Metadata } from "next";
import { ReactNode } from "react";

import { QueryProvider } from "@components/providers/query-provider";
import { fonts } from "@components/styles/fonts";
import "@styles/global.css";
import { QueryClient } from "@tanstack/react-query";

export const metadata: Metadata = {
  title: "Defense IA | Middlewares e Centrais",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={fonts.nunito}>
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
