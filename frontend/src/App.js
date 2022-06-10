import './App.css';
import Footer from "./FormPages/CustomComponents/Footer";
import ArtSuppliesForm from './FormPages/ArtSuppliesForm'
import {ImgPreloader, ArtSuppliesImgPreloader} from './FormPages/CustomComponents/ImgPreloader'

function App() {
    return (
        <>
            <ImgPreloader/>
            <ArtSuppliesImgPreloader/>
            <div className='user-form'>
                <ArtSuppliesForm/>
                <Footer/>
            </div>
        </>
    );
}

export default App;