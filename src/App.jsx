import React, {useState} from 'react';
import Header from './components/layout/Header/Header.jsx';
import About from './components/sections/About/About.jsx';
import Preloader from './components/common/Preloader/Preloader.jsx';
import Skills from './components/sections/Skills/Skills.jsx';
import Services from './components/sections/Services/Services.jsx';
import Footer from './components/layout/Footer/Footer.jsx';
import './App.css';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const handlePreloaderComplete = () => {
        setIsLoading(false);
    };

    return (
        <div className="App">
            {isLoading && <Preloader onComplete={handlePreloaderComplete}/>}
            <Header />
            <About />
            <Skills />
            <Services />
            <Footer />
        </div>
    );
}

export default App;
