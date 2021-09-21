import requests from "../utils/requests"
import { useRouter } from 'next/router'

function Nav() {
    const router = useRouter();

    return (
        <nav className='relative'>
            <div className='flex px-10 sm:px-20 text-sm sm:text-lg whitespace-nowrap
                space-x-8 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
                {Object.entries(requests).map(([key, {title, url }]) =>(
                    <h2
                        key={key}
                        onClick={() => router.push(`/?genre=${key}`)}
                        className='cursor-pointer transition duration-200
                        transform hover:scale-125 hover:text-white active:text-green-400'>
                        {title}
                    </h2>
                ))}
            </div>
            <div className='absolute right-0 top-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
        </nav>
    )
}

export default Nav
