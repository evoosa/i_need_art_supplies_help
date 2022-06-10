import './App.css';
import Footer from "./FormPages/CustomComponents/Footer";
import ArtSuppliesForm from './FormPages/ArtSuppliesForm'
import {WebsiteAssetImgsPreloader, ArtSuppliesImgPreloader} from './FormPages/CustomComponents/WebsiteAssetImgsPreloader'

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