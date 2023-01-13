import Head from "next/head";
import Link from "next/link";
import React from "react";
import Dropdown from "../../../components/shared/Dropdown";

const Test = () => {
  return (
    <>
      <Head>
        <title>Insight Page</title>
      </Head>

      {/* //!  Sehifede hazir navbar ve sidebar oldugu ucun sadece sekil qoydum dizayn duz olsun deye. Esas layihede componentle evez edeciyik*/}

      {/* Header*/}

      {/* //* Fake navbar and for correct design*/}
      <header className="fake-navbar">
        <img className="w-full h-[72px]" src="/navbar.jpg" alt="navbar-example-img" />
      </header>

      {/* Header End */}

      {/* Main Start */}

      <main className="flex bg-light">

        {/* //* Fake sidebar and for correct design*/}
        <aside>
        <img className="w-[243px] h-[calc(100vh-72px)]" src="/sidebar.jpg" alt="sidebar-example-img" />
        </aside>
        {/* Sidebar end */}
        
        <section className="flex-auto px-8 py-12"><Dropdown dropdownFor = "TOKEN_PRICES"  /> <Dropdown dropdownFor="LABELS"/></section>
        
      </main>

      {/* Main END */}

      
      {/* //* For go back */}
      <Link className="absolute left-0 top-1/2 text-lg text-blue-800 font-bold" href="/" >To back. Just for going back</Link>
    </>
  );
};

export default Test;
