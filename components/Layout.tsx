import React from "react";
import Nav from "@/components/Nav";

const Layout = ({children}) => {
    return (
        <>
            <Nav></Nav>
            <div>
                {children}
            </div>

        </>
    )
}


export default Layout;