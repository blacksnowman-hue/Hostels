import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


interface Props {
    children: React.ReactNode;
}

export const Layout = ({children}:Props) => {
    return ( <div className="flex flex-col min-h-screen ">
    <Header/>
    <Hero/>
<div className="container mx-auto flex-1 py-10"> 
    {children}  </div>
    <Footer/>
             
            </div>
    );
};
    
