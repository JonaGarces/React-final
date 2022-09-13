import React from 'react';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Card from "./components/Cards";
import './Main.css';
/* import img1 from './assets/img/01.jpg' */

export function Main({ jumbotron, navbar, card, footer }) { // Destructuring Javascript
    return (
        <>
            {/* <!-- Navigation--> */}
            <Navbar navbar={navbar} />
            {/* <!-- Header--> */}
            <div className='container'>
            <Jumbotron jumbotron={jumbotron} />
            {/* <!-- Content sections --> */}
            {
               <div className="row m-5">
               <Card card={card} />
               <Card card={card} />
               <Card card={card} />
               <Card card={card} />
           </div>
            }
            </div>
            {/* <!-- Footer--> */}
            <Footer footer={footer} />
        </>
    )
}

