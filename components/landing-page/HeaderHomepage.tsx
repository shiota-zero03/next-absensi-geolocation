import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const HeaderHomepage = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (    
        <>
            <nav className="bg-gray-900 border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link href="/" className="flex items-center">
                        <Image width={50} height={50}  src="/dark_logo.png" className="mr-3" alt="Flowbite Logo" />
                        <span className="self-center lg:text-2xl md:text-md font-semibold whitespace-nowrap dark:text-white md:block hidden">
                            Sistem Absensi Pegawai
                        </span>
                    </Link>
                    <div className="flex items-center">
                        <div
                            suppressHydrationWarning={true}
                            className="text-sm text-white duration-200 border rounded py-2 px-5 mr-3 md:mr-0 md:block hidden font-mono"
                        >
                            {typeof window === 'undefined' ? (
                                currentTime.toLocaleString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + ' ' + currentTime.toLocaleTimeString()
                            ) : (
                                currentTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + ' ' + currentTime.toLocaleTimeString()
                            )}
                        </div>
                        <Link href="/login" className="text-sm text-white hover:text-blue-200 duration-200 rounded py-2 px-5 ml-3 md:ml-2 bg-blue-700 border border-blue-700">Sign In</Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default HeaderHomepage;
