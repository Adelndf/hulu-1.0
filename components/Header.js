import { 
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
 } from '@heroicons/react/outline'
import Image from 'next/image'
import Logo from '../images/Hulu-Logo.png';
import HeaderItem from './HeaderItem';

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center sm:mr-10">
            <div className="flex flex-grow justify-evenly max-w-xl h-auto">
                <HeaderItem title='Home' Icon={HomeIcon}/>
                <HeaderItem title='Trinding' Icon={LightningBoltIcon}/>
                <HeaderItem title='Verified' Icon={BadgeCheckIcon}/>
                <HeaderItem title='Collections' Icon={CollectionIcon}/>
                <HeaderItem title='Search' Icon={SearchIcon}/>
                <HeaderItem title='Account' Icon={UserIcon}/>

            </div>
            <Image className="object-contain"
            src={Logo} width={140} height={70}/>

        </header>
    )
}

export default Header
