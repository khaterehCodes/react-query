import Header from "@/components/ui/header";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}

export default Layout;
