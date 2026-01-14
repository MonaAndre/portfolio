import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div className="relative">
            {/* Large gradient circle */}
            <div className="absolute right-0  w-1/2 h-140 rounded-full bg-linear-to-br from-primary/20 via-accent/10 to-transparent blur-3xl" />

            <div className="">
                <main className="p-5">
                    
                    <Outlet />
                </main>
                
            </div>
           
        </div>
    );
};