import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {Pagination} from 'antd';
import Header from "./Header"
import {getPokemonList, searchPokemon} from "../api/Service";
import './PokemonList.css';


const PokemonList = () => {
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [hasPrevious, setHasPrevious] = useState(false);
    const [hasNext, setHasNext] = useState(false);


    useEffect(() => {

        getData(0, 20);

    }, []);

    const getData = (offset, limit) => {
        getPokemonList(offset, limit).then((res) => {
            console.log('res', res);
            const data = res.data.results;
            setList(data);

            setTotal(res.data.count);
            setHasPrevious(!!res.data.previous);
            setHasNext(!!res.data.next);
        }).catch((err) => {
            console.log(err);
        })
    }


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


    const onChange = (page, pageSize) => {
        const nextPage = page * pageSize;
      
        getData(nextPage, pageSize);
      }
      

    return (
        <React.Fragment className="container-fluid">
            <Header onSearch={handleSearch}/>
            <Container fluid className="mt-5 ">

                <Row xs={1}
                    md={2}
                    className="g-4">
                    {
                    list.map((data, idx) => (
                        <Col key={idx}>
                            <Card className="poke opacity-75 rounded border border-success border-2 ">
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

                <Pagination defaultCurrent={1}
                    total={total} showSizeChanger={false} pageSize={20} onChange={onChange} className="w-100 p-3 justify-content-center d-flex"/>


            </Container>
        </React.Fragment>
    );
}

export default PokemonList;
