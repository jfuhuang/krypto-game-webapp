import Footer from './Footer.jsx'
import Header from './Header/Header.jsx'
import PlayButton from './PlayButton/PlayButton.jsx';

function InitialPage() {
    return(
    <div style={{color:"#FFFD82"}}className="initial-page d-flex flex-column justify-content-between align-items-center vh-100">
        <Header />
        <PlayButton />
        <Footer />
    </div>
    );
}

export default InitialPage;