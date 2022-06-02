import './App.css';
import Footer from "./FormPages/CustomComponents/Footer";
import ArtSuppliesForm from './FormPages/ArtSuppliesForm'

function App() {
    return (
        <>
            <div className='user-form'>
                <ArtSuppliesForm/>
                <Footer/>
            </div>
        </>
    );
}

export default App;