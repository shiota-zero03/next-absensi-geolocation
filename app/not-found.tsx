import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
    return (
        <div className="bg-[#aff0e4] flex h-screen w-full items-center justify-center">
            <div className='w-full text-center md:mt-[-100px] mt-[-50px]'>
                <Image src={'/assets/images/error.gif'} width={100} height={100} className='lg:w-[50%] md:w-[64%] w-[80%] lg:ms-[25%] md:ms-[18%] ms-[10%] text-center' alt='error' />
                <h1 className="md:text-[2rem] text-[1.5rem] font-bold text-black md:mt-[-50px]">Page not found !</h1>
                <p className="mb-7 text-black">Oops! Halaman yang Anda cari tidak ditemukan.</p>
                <Link href="/" className="bg-gray-900 text-white py-2 px-4 md:text-base text-[.8rem] rounded-xl">Kembali ke Halaman Utama</Link>
            </div>
        </div>
    );
}

export default NotFound;