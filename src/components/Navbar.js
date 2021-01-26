import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {

    return (
        <>
            <header className="header">
                <ul className="">
                    <li className="">
                        <Link to="/overhead" className="">First Link</Link>
                    </li>

                    <li className="">
                        <Link to="/accent" className="">Second Link</Link>
                    </li>
                </ul>
            </header>
        </>
    );
};



export default Navbar;

