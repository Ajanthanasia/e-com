'use client';

import Header from "./header";

export default function UserLayout({ children }) {
    return (
        <>
            <div className="flex min-h-screen bg-gray-100 font-sans text-sm flex-col">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <div className="flex-1 flex">

                    {/* Page content */}
                    <main className="flex-1 p-6 bg-gray-100">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}