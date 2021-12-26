import React from "react";
import Container from 'react-bootstrap/Container';
import Header from "./Header";
import PokemonList from "./PokemonList";
import "./Home.css";


const Home = () => {
    return (
        <Container fluid className="home">
            <div className="container-fluid">
                <PokemonList/>
            </div>
        </Container>
    );
}

export default Home;
