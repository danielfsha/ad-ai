import { Inter } from "next/font/google";
import "./globals.css";

import AuthProvider from "@/context/authContext";
import FormProvider  from "@/context/formContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <FormProvider>
        <html lang="en">
          <body className={inter.className}>
            <div className="w-screen h-screen overflow-x-hidden flex flex-col">
              {children}
            </div>
          </body>
        </html>
      </FormProvider>
    </AuthProvider>
  );
}
