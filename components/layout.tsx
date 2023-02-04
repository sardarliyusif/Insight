import Link from "next/link";
import React from "react";



const Layout  = ({ children } ) => {
  return (
    <>
      <header className="fake-navbar">
        <img
          className="w-full h-[72px]"
          src="/navbar.jpg"
          alt="navbar-example-img"
        />
      </header>
      <main className="flex bg-light">
        <aside className="min-w-[243px]">
          <img
            className="w-full h-[calc(100vh-72px)]"
            src="/sidebar.jpg"
            alt="sidebar-example-img"
          />
        </aside>

        <section className="flex-auto px-8 py-12 flex flex-col">{children}</section>
      </main>
      <Link
        className="absolute left-0 top-1/2 text-base text-blue-800 font-bold"
        href="/"
      >
        To back. Just for going back
      </Link>
    </>
  );
};

export default Layout;
