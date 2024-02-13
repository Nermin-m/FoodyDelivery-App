import React from 'react';
import Navbar from "../components/homePage/navbar";
import Footer from "../components/homePage/footer";


function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
}

export default ClientLayout;
