import Image from "next/image";
const Navbar = () => {
    return (
        <div className="flex justify-between bg-[#11100f] py-8 px-20 h-[10vh]">
            <div className="flex justify-center items-center gap-4 text-[#EFE9E1] ">
                    <Image
                        src="/vercel.svg"
                        alt="Placeholders Vyna.live logomark"
                        width={20}
                        height={20}
                    />
                    <span className="font-bold text-2xl">VYNA.LIVE</span>
            </div>
            <div>
                <ul className="flex justify-center items-center gap-8 text-[#CDBCAB] font-semibold text-lg">
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Why Us</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li>
                        <span className="py-2 px-4 bg-yellow-500 text-[#EFE9E1] rounded-3xl">Go Live</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;