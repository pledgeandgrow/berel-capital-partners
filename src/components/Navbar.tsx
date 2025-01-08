import React from "react";
import Link from 'next/link';


const Navbar = () => {
    return (
        <header
            className="fixed w-full z-10 bg-onyx/80 backdrop-blur-sm border-b border-silk/10"
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/MeetingForm" className="text-2xl font-bold text-silk">
                    B.C.P
                </Link>
                <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap 
                    rounded-md text-sm font-medium ring-offset-background transition-colors 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background h-10 px-4 py-2 text-silk border-silk hover:bg-silk hover:text-onyx"
                >
                    Schedule Meeting
                </button>
            </div>
        </header>
    );
};

export default Navbar;
