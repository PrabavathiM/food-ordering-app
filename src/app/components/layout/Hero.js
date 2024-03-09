import Right from './icons/Right'
export default function Hero() {
    return (
        <section className="hero">
            <div className="py-10">
                <h1 className="my-4 font-black font-weight:900 text-4xl ">
                    First we <span className='text-primary'> eat</span><br />
                    then we do <br />everything else
                </h1>

                <p className="my-6 text-gray-600 text-sm">
                    Food nourishes the body, fuels our endeavors, and connects us culturally. It evokes memories, satisfies cravings, and brings people together. From simple pleasures to culinary delights, food is a universal language of delight.
                </p>
            </div>
            


            <div className="w-25 h-20 relative">
                <img src={'biryani.jpeg'} layout={'fill'} objectFit={'contain'} alt={'biryani'} />
            </div>
            <div className="flex gap-4 text-sm">
                <button className="bg-primary uppercase flex gap-2 text-white px-4 py-2  items-center rounded-full" >
                    Order now
                    <Right />
                </button>

                <button className=" text-gray flex gap-2 px-4 py-2 rounded-full items-center">
                    Learn more
                    <Right />
                </button>
            </div>
        </section>
    );
}
