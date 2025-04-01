
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-16 pb-16">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold mb-4 text-brand-green">404</h1>
          <p className="text-2xl text-gray-800 mb-6">Pagina niet gevonden</p>
          <p className="text-gray-600 mb-8">
            Sorry, de pagina die u zoekt bestaat niet of is verplaatst.
          </p>
          <Link to="/" className="bg-brand-green hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
            Terug naar de homepage
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
