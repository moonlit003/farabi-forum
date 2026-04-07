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

import { Awards } from './pages/Awards';


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
                        <Route path="/farabi-forum-website/" component={Home} />
                        <Route path="/farabi-forum-website/farabi" component={Farabi} />
                        <Route path="/farabi-forum-website/map" component={Map} />

                        <Route path="/farabi-forum-website/farabi-forum" component={FarabiForum} />
                        <Route path="/farabi-forum-website/programme" component={Conference1} />
                        <Route path="/farabi-forum-website/sections" component={Conference2} />
                        <Route path="/farabi-forum-website/mazhilis" component={Mazhilis} />
                        <Route path="/farabi-forum-website/discussion" component={Discussion} />
                        <Route path="/farabi-forum-website/speakers" component={Speakers} />
                        <Route path="/farabi-forum-website/committee" component={Committee} />
                        <Route path="/farabi-forum-website/partners" component={Partners} />

                        <Route path="/farabi-forum-website/awards" component={Awards} />
                        
                    </Router>
                </main>
            <Navbar />
        </LocationProvider>
    );
}


const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Root element with id "app" was not found.');

render(<App />, rootElement);