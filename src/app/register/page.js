export default function RegisterPage(){
    return(
       <section className="mt-8">
        {/* header */}
           <header className="flex items-center justify-between">
            <a className="text-primary font-semibold text-3xl" href="">FOOD BOX</a>
            <nav className="flex gap-8 items-center text-gray-600">
                <a href="">Home</a>
                <a href="">Menu</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </nav>
            <nav className='flex items-center gap-4 text-gray-500'>
                <a href="/login">Login</a>
                <a className="bg-primary text-white rounded-full px-6 py-2" href="register">Register</a>
            </nav>
        </header>  
         {/*form part  */}
        <h1 className="text-center text-primary text-4xl font-bold mt-5">
            Register
        </h1>
        <form className="block max-w-xs mx-auto">
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input> 
            <button type="submit">Register</button> 
            <div className="my-4 text-center text-gray-500" >
                or login with provider
            </div>
            <button className="flex gap-4 justify-center">
                <img src={'/google-icon.png'} alt={''} width={24} height={24} />
                Login with google
            </button>      
        </form>
        {/* footer */}
        <footer className="border-t p-8 text-center text-gray-500 mt-8">
            &copy; 2024 All rights reserved
          </footer>
       </section>
    );
}