export default function HomeMenu() {
    return (
        <section className="mt-20 relative h-dvh">

            <div className=" text-center overflow-x-hidden">
                <h3 className="uppercase text-gray-500 semi-bold">check out</h3>
                <h2 className="text-primary font-semibold">Menu</h2>
            </div>
        <br></br>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-300 p-4 rounded-lg text-center">
                    <div>
                        <img src="R.jpg" alt="biryani" />
                    </div>

                    <h2 className="text-5px font-semibold my-4">chicken Biryani</h2>
                    <p className="text-sm">Chicken Biryani is a highly aromatic, mouth-watering staple dish that needs no introduction.</p>
                    <button className="bg-primary text-white rounded-full py-3 px-2 m-2 ">
                        Add to cart &#8377;100
                    </button>
                </div>

                <div className="bg-gray-300 p-4 rounded-lg text-center">
                    <img alt="food" />
                </div>

                <div className="bg-gray-300 p-4 rounded-lg text-center">
                    <img alt="food" />
                </div>
            </div>
        </section>
    );
}
