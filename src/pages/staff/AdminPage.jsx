import React from "react";

const AdminPage = () => {
  return (
    <>
      {/* Navbar section */}
      <nav className="w-full flex items-center py-5 z-20 bg-gradient-to-b from-[#fc4b08] to-orange-500 xl:px-0 sm:px-16 px-6">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="text-white font-bignoodle tracking-wide text-lg text-center">
            Bienvenidido <span className="">User</span> ⚙ !
          </h1>
        </div>
      </nav>

      {/* Hero section*/}
      <section className="relative w-full h-screen mx-auto bg-white">
        <div className="xl:px-0 sm:px-16 px-6 max-w-7xl mx-auto flex justify-evenly items-center pt-52">
          <div className="w-[300px] h-[200px] bg-orange-500 items-center">
            <h1></h1>
          </div>
          <div className="w-[300px] h-[200px] bg-orange-500 ">
            <h1></h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminPage;
