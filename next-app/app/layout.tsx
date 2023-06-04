import { Nunito } from "next/font/google";
import "./globals.css";

// components
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import { Toaster } from "react-hot-toast";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: "Aribnb",
  description: "Aribnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="ja">
      <body className={font.className}>
        <ClientOnly>
          <Toaster />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
