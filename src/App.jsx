import React, {useState} from 'react';
import Header from './components/layout/Header/Header.jsx';
import About from './components/sections/About/About.jsx';
import Preloader from './components/common/Preloader/Preloader.jsx';
import Skills from './components/sections/Skills/Skills.jsx';
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
            <Footer />
        </div>
    );
}

export default App;
