export default function HomeMenu() {
    return (
        <section className="mt-20 relative">

            <div className=" text-center">
                <h3 className="uppercase text-gray-500 semi-bold">check out</h3>
                <h2 className="">Menu</h2>
            </div>

            <div className="w-40 h-40 relative">
                <img src={'left.jpeg'} layout={'fill'} objectFit={'contain'} alt={'chicken-leg'} />
            </div>

            <div className="w-40 h-40 relative flex flex-direction-row  -right-20 ">
                <img src={'chi-fry.jpeg'} layout={'fill'} objectFit={'contain'} alt={'chicken-fry'} />
            </div>
        </section>
    );
}