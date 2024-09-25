import { inter } from "@/styles/fonts";
import "@/styles/globals.scss";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: {
    default: "Jim Alley",
    template: "%s | Jim Alley"
  },
  description: "I'm a veteran short story writer living in West Sacramento, California.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}