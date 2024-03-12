export default function RegisterPage(){
    return(
       <section className="mt-8">
        <h1 className="text-center text-primary text-4xl font-bold">
            Register
        </h1>
        <form className="block max-w-xs mx-auto">
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input> 
            <button type="submit">Register</button> 
            <div className="my-4 text-center text-gray-500" >
                or login with provider
            </div>
            <button>Login with google</button>      
        </form>
       </section>
    );
}