

function HeaderItem({ title, Icon }) {
    return (
        <div className="group flex flex-col items-center cursor-pointer w-10 sm:w-15 hover:text-white">
            <Icon className="h-5 mb-1 group-hover:animate-bounce "/>
            <p className="font-light opacity-0 group-hover:opacity-100 traking-widest transition duration-200 text-sm">{title}</p>
        </div>
    )
}

export default HeaderItem
