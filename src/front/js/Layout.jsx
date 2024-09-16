import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext.js";

import ScrollToTop from "./component/ScrollToTop.jsx";
import { BackendURL } from "./component/BackendURL.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";

// Importa los componentes de las páginas
import { Home } from "./pages/Home.jsx";
import { Demo } from "./pages/Demo.jsx";
import { Single } from "./pages/Single.jsx";
import Characters from "./component/Characters.jsx";
import CharactersDetails from "./component/CharactersDetails.jsx";
import Planets from "./component/Planets.jsx";
import PlanetsDetails from "./component/PlanetsDetails.jsx";
import Starships from "./component/Starships.jsx";
import StarshipsDetails from "./component/StarshipsDetails.jsx";
import UpdateContact from "./component/UpdateContact.jsx";
import CreateANewContact from "./component/CreateANewContact.jsx";
import Contacts from "./component/Contacts.jsx";
import CharactersLS from "./component/CharactersLS.jsx";
import { BtnFavorites } from "./component/BtnFavorites.jsx";


const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div className="d-flex flex-column min-vh-100">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Characters />} path="/characters" />
                        <Route element={<CharactersDetails />} path="/character/:id" />
                        <Route element={<Planets />} path="/planets" />
                        <Route element={<PlanetsDetails />} path="/planet/:id" />
                        <Route element={<Starships />} path="/starships" />
                        <Route element={<StarshipsDetails />} path="/starship/:id" />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="createContact" element={<CreateANewContact />}></Route>
                        <Route path="updateContact" element={<UpdateContact />}></Route>
                        <Route element={<h1>Not found!</h1>} path="*" />
                        <Route element={ <CharactersLS/> } path="charactsLS" />
                        <Route element = { <BtnFavorites />} path="btnfavorites"></Route>
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
