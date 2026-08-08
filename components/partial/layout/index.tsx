import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
