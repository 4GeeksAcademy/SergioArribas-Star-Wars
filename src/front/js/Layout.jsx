// src/front/js/Layout.jsx
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
import CharactersDetails from"./component/CharactersDetails.jsx"
import Planets from "./component/Planets.jsx"; 
import PlanetsDetails from "./component/PlanetsDetails.jsx"
import Starships from "./component/Starships.jsx"; 
import StarshipDetails from "./component/StarshipsDetails.jsx"; 

// Crea tu componente principal
const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Characters />} path="/characters" />
                        <Route element={<CharactersDetails />} path="/character/:id"/>
                        <Route element={<Planets />} path="/planets" />
                        <Route element={<PlanetsDetails />} path="/planet/:id"/>
                        <Route element={<Starships />} path="/starships" />
                        <Route element={<StarshipDetails />} path="/starship/:id" />
                        <Route element={<h1>Not found!</h1>} path="*" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
