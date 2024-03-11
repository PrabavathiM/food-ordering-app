export default function HomeMenu() {
  return (
      <section className="mt-20 relative h-dvh">
          <div className=" text-center overflow-x-hidden">
              <h3 className="uppercase text-gray-600 semi-bold">Check Out</h3>
              <h2 className="text-primary font-semibold">Menu</h2>
          </div>
          <br></br>
          <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-200 p-3 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
                  <div className="w-25 h-25">
                      <img src="chi-biryan.jpg" alt="biryani" />
                  </div>

                  <h2 className="text-5px font-semibold mt-2">chicken Biryani</h2>
                  <p className="text-sm ">Chicken Biryani is a highly aromatic, mouth-watering staple dish that needs no introduction.</p>
                  <button className="bg-primary text-white rounded-full py-2 px-2 m-2 ">
                      Add to cart &#8377;100
                  </button>
              </div>

              <div className="bg-gray-200 p-4 rounded-lg text-center  hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
                  <div>
                      <img src="Mutton-Biryani.webp" alt="Mutton Biryani" />
                  </div>
                  <h2 className=" text-5px font-semibold mt-2">Mutton Biryani</h2>
                  <p className="text-sm">
                      Mutton biryani is not just a dish; it's a culinary experience that tantalizes the taste.
                  </p>
                  <button className="bg-primary text-white rounded-full py-2 px-3 m-2 ">
                      Add to cart &#8377;200
                  </button>
              </div>

              <div className="bg-gray-200 p-4 rounded-lg text-center  hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
                  <div>
                      <img src="fishbiryani.jpg" alt="fish Briyani" />
                  </div>
                  <h2 className="text-5px font-semibold mt-2">Fish Biryani</h2>
                  <p className="text-sm">Fish biryani offers a delightful combination of tender fish, fragrant rice, and aromatic spices</p>
                  <button className="bg-primary text-white rounded-full py-2 px-3 m-2 ">
                      Add to cart &#8377;150
                  </button>
              </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-200 p-3 rounded-lg text-center mt-10 hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
                  <div className="w-25 h-25">
                      <img src="south indian.jpg" alt="south indian" />
                  </div>

                  <h2 className="text-5px font-semibold mt-2">South Indian Meals</h2>
                  <p className="text-sm ">South Indian meals are renowned for their diversity, flavors, and nutritional balance.</p>
                  <button className="bg-primary text-white rounded-full py-2 px-2 m-2 ">
                      Add to cart &#8377;140
                  </button>
              </div>

              <div className="bg-gray-200 p-4 rounded-lg text-center mt-10 hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
                  <div>
                      <img src="nor-meal.webp" alt="North Indian" />
                  </div>
                  <h2 className=" text-5px font-semibold mt-3">North Indian Meals</h2>
                  <p className="text-sm">
                      North Indian meals are a celebration of bold flavors, aromatic spices, and diverse culinary traditions..
                  </p>
                  <button className="bg-primary text-white rounded-full py-2 px-3 m-2 mt-2 ">
                      Add to cart &#8377;150
                  </button>
              </div>

              <div className="bg-gray-200 p-4 rounded-lg text-center mt-10 hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
                  <div>
                      <img src="Masala-Dosa.jpg" alt="masal-dosa" />
                  </div>
                  <h2 className="text-5px font-semibold mt-2">Masala Dosa</h2>
                  <p className="text-sm">Masala dosa is often accompanied by coconut chutney and sambar, a lentil-based vegetable stew with a tangy</p>
                  <button className="bg-primary text-white rounded-full py-2 px-3 m-2 ">
                      Add to cart &#8377;120
                  </button>
              </div>
          </div>
          <br />
          <div>
              <h1 className="text-primary font-extrabold text-center text-1xl mt-5">About Us</h1>
              <p className="text-sm text-center mt-3">Indulge in the rich flavors of Tamil Nadu with our delectable cuisine, crafted with care and authenticity. Our commitment to quality ensures every dish is a culinary delight. Experience the essence of South Indian cuisine through our flavorful offerings, guaranteed to tantalize your taste buds and leave you craving for more.</p>
          </div>
          <br></br>
          <div>
              <h1 className="text-center text-sm text-gray-500">Don't hesitate</h1>
              <h2 className="text-center text-primary font-extrabold text-1xl ">Contact Us</h2>
              <div className="text-center my-4">
              <a className="text-center text-gray-500 underline font-bold mt-3">+91 9500452315</a>
              </div>
          </div>
          <footer className="border-t p-8 text-center text-gray-500 mt-8">
            &copy; 2024 All rights reserved
          </footer>
      </section>
  
      
  );
}