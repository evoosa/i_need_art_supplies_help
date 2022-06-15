import './App.css';
import Footer from "./CustomComponents/Footer";
import ArtSuppliesForm from './FormPages/ArtSuppliesForm'
import {WebsiteAssetImgsPreloader, ArtSuppliesImgPreloader} from './CustomComponents/WebsiteAssetImgsPreloader'
import React from "react";

function App() {
    return (
        <>
            <WebsiteAssetImgsPreloader/>
            <ArtSuppliesImgPreloader/>
            <div className='user-form'>
                <ArtSuppliesForm/>
                <Footer/>
            </div>
        </>
    );
}

export default App;