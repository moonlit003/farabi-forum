 import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import preactLogo from './assets/preact.svg';
import './style.css';

// --- Page Components ---
import { Home } from './pages/Home';
import { Farabi } from './pages/Farabi'
import { Map } from './pages/Map';

import { FarabiForum } from './pages/FarabiForum';
import { Conference1 } from './pages/Conference1';
import { Conference2 } from './pages/Conference2';
import { Mazhilis } from './pages/Mazhilis';
import { Discussion } from './pages/Discussion';
import { Speakers } from './pages/Speakers';
import { Committee } from './pages/Committee';
import { Partners } from './pages/Partners';


import { Navbar } from './components/Navbar';
import { Header } from './components/Header'

// --- Layout & Routing ---
export function App() {
    return (
        <LocationProvider>
            {/* <div id="app">
                <header>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/farabi">Farabi</a>
                    </nav>
                </header>
            </div> */}

            <Header />
                <main className={"h-full"}>
                    <Router>
                        <Route path="/" component={Home} />
                        <Route path="/farabi" component={Farabi} />
                        <Route path="/map" component={Map} />

                        <Route path="/farabi-forum" component={FarabiForum} />
                        <Route path="/programme" component={Conference1} />
                        <Route path="/sections" component={Conference2} />
                        <Route path="/mazhilis" component={Mazhilis} />
                        <Route path="/discussion" component={Discussion} />
                        <Route path="/speakers" component={Speakers} />
                        <Route path="/committee" component={Committee} />
                        <Route path="/partners" component={Partners} />
                        
                    </Router>
                </main>
            <Navbar />
        </LocationProvider>
    );
}


render(<App />, document.getElementById('app'));