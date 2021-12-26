import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";
import Header from "./Header"
import {getPokemonList, searchPokemon} from "../api/Service";
import './PokemonList.css';


const PokemonList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        getPokemonList().then((res) => {
            console.log('res', res);
            const data = res.data.results;
            setList(data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);


    const handleSearch = (search) => {

        if (search.length > 0) {
            searchPokemon(search).then((res) => {
                console.log('res', res);
                const data = res.data;
                setList([data]);
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <React.Fragment className="container">
            <Header onSearch={handleSearch}/>
            <Container fluid className="mt-5 ">

                <Row xs={1}
                    md={2}
                    className="g-4">
                    {
                    list.map((data, idx) => (
                        <Col key={idx}>
                            <Card className="poke opacity-75">
                                <Card.Body>
                                    <Card.Title className="text-capitalize">
                                        {
                                        data.name
                                    }</Card.Title>
                                    <Card.Text>
                                        <Link to={
                                                `/pokemon/${
                                                    data.name
                                                }`
                                            }
                                            state={
                                                {name: data.name}
                                        }>
                                            <button className="btn btn-success button">Details</button>
                                        </Link>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                } </Row>

                <Pagination>
                    <Pagination.First/>
                    <Pagination.Prev/>

                    <Pagination.Item active>
                        {1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>

                    <Pagination.Next/>
                    <Pagination.Last/>
                </Pagination>

            </Container>
        </React.Fragment>
    );
}

export default PokemonList;
