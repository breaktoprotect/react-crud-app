import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Dashboard from "./components/dashboard";
import ErrorPage from "./components/errorpage";
import UploadForm from "./components/uploadForm";

function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="content">
                <Switch>
                    <Route path="/upload" component={UploadForm} />
                    <Route path="/error404" component={ErrorPage} />
                    <Route path="/" exact component={Dashboard} />
                    <Redirect to="/error404" />
                </Switch>
            </div>
        </div>
    );
}

export default App;
