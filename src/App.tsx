import React from 'react';
import Header from "./sections/header/header";
import Introduction from "./sections/intro/intro";
import Benefits from "./sections/benefits/benefits";
import Access from "./sections/access/access";
import Footer from "./sections/footer/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Introduction/>
            <Benefits/>
            <Access/>
            <Footer/>
        </div>
    );
}

export default App;
