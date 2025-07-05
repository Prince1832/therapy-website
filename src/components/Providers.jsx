"use client";

import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import Navbar from "./navbar";

const Providers = ({ children }) => {
  const pathname = usePathname();
  const hideNavbar = pathname === "/thankyou";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className={!hideNavbar ? "pt-15" : ""}>{children}</main>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#333",
            fontSize: "14px",
          },
          success: {
            style: {
              background: "#dcfce7",
              color: "#15803d",
            },
          },
          error: {
            style: {
              background: "#fee2e2",
              color: "#b91c1c",
            },
          },
        }}
      />
    </>
  );
};

export default Providers;
