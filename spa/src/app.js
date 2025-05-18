import {h, render} from 'preact';
import {Router, Link} from 'preact-router';
import {useState, useEffect} from 'preact/hooks';
import { findConferences } from './api/api.js';
import Home from './pages/home.js';
import Conference from './pages/conference.js';


function App() {
    const [conferences, setConferences] = useState(null);

    useEffect(() => {
        findConferences().then((conferences) => {
            setConferences(conferences);
            console.log(conferences);
        });
    }, []);

    console.log(conferences);

    if (conferences === null) {
        return <div className="text-center pt-5">Loading...
        <a href={ENV_API_ENDPOINT+'uploads/photos/'} target="_blank">link</a>
        </div>;
    }

    return (
        <div>
            <header>
                {conferences.map((conference) => (
                    <Link className="nav-conference" href={'/conference/'+conference.slug}>
                        {conference.city} {conference.year}
                    </Link>
                ))}
            </header>
            <Router>
                <Home path="/" conferences={conferences} />
                <Conference path="/conference/:slug" conferences={conferences} />
            </Router>
        </div>
    )
}

render(<App />, document.getElementById('app'));