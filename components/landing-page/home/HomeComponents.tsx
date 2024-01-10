import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const HomeComponents = () => {
    const styleBackground = {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/images/background-firstpage.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    }
    return(
        <>
            <section className='absolute top-0 h-[100vh] w-[100%] z-[-10]' style={styleBackground}>
                <div className='flex justify-center items-center h-[100vh]'>
                    <div className='bg-white rounded-[20px] p-4 lg:w-1/2 w-[90%] text-center text-black'>
                        <h1 className='lg:text-[3rem] md:text-[1.5rem] text-[1.2rem]'>
                            <strong>
                                SELAMAT DATANG DI SISTEM ABSENSI PEGAWAI
                            </strong>
                        </h1>
                        <h1 className='lg:text-[3rem] md:text-[1.5rem] text-[1.2rem]'>
                            <strong>
                                PT. FAMERAN
                            </strong>
                        </h1>
                        <br className='md:block hidden' />
                        <Link href="/login" className='text-blue-700 md:text-base text-[.8rem] flex w-[100%] justify-center'>
                            Klik disini untuk login ke halaman absensi <FontAwesomeIcon icon={faArrowRight} className='ml-2 mt-1 w-[15px]' />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeComponents;