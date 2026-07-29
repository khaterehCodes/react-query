import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}

export default Layout;
