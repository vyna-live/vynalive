import Image from "next/image";

const Hero = () => {
    return (
        <div className="flex justify-center items-center text-[#efe9e1] bg-[#11100f] h-[90vh]">
            <div className="flex flex-col justify-center items-center gap-10">
                <h1 className="text-8xl text-center w-3/4">
                    Reduce your livestream research time by 20x
                </h1>
                <Image 
                    className=""
                    src="/hero-img.svg"
                    alt="Hero image"
                    width={500}
                    height={400}
                />
                <button className="py-6 px-14 bg-yellow-500 text-[#EFE9E1] rounded-full font-semibold text-2xl">Go Live</button>
            
            </div>
            
        </div>
    )
}

export default Hero;