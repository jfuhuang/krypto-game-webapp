import Footer from './InitialPage/Footer.jsx'
import Header from './InitialPage/Header.jsx'
import PlayButton from './InitialPage/PlayButton.jsx';

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