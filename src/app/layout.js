import "./globals.css";
import Providers from "@/components/Providers";
import ScrollToTopButton from "@/components/scrollToTopButton";

export const metadata = {
  title: "Serena Wellness - Therapy Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
