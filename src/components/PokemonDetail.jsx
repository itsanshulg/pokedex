import React, {useState, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import {useLocation} from "react-router-dom";
import {searchPokemon} from '../api/Service';
import './PokemonDetail.css'
import male from './male.png';
import female from './female.png';

const PokemonDetail = () => {
    const location = useLocation();
    const [detail, setDetail] = useState();
    const [abilityList, setAbilityList] = useState([]);
    const [typeList, setTypeList] = useState([]);
    const [statsList, setStatsList] = useState([]);


    useEffect(() => {

        console.log(location);
        const name = location.state.name;

        searchPokemon(name).then((res) => {
            console.log(res);
            const data = res.data;
            setDetail(data);

            const statsData = res.data.stats;
            setStatsList(statsData);

            const abilityData = res.data.abilities;
            setAbilityList(abilityData);

            const typeData = res.data.types;
            setTypeList(typeData);


        }).catch(err => console.log(err));

    }, [])


    return detail ? (
        <React.Fragment className="container-fluid">
            <div >
                <Header/>
                <Container fluid>
                    <h1 className="display-4 text-capitalize heading m-5">
                        {
                        detail.name
                    } </h1>
                    <center>
                        <img className="pokemon-image"
                            src={
                                detail.sprites.other['official-artwork'].front_default
                            }
                            alt=""/>
                        <Row>
                            <Col>
                                <h5 className="display-6 text-capitalize m-2">Type</h5>
                                {
                                typeList.map((data, idx) => (
                                    <div key={idx}>
                                        {
                                        data.type.name
                                    }</div>
                                ))
                            }
                                <h5 className="display-7 text-capitalize m-2">Ability</h5>
                                <div>{
                                    abilityList.map((data, idx) => (
                                        <div key={idx}>
                                            {
                                            data.ability.name
                                        }</div>
                                    ))
                                }</div>
                            </Col>

                            <Col>
                                <h5 className="display-6 text-capitalize m-2">Details</h5>
                                <div>Height-{
                                    detail.height
                                }</div>
                                <div>Weight-{
                                    detail.weight
                                }</div>
                                <div> 
                                    Gender - <img src={male} style={{height : 20 }}/> / <img src={female} style={{height : 22 }}/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5 className="display-6 text-capitalize m-2">Status</h5>
                                <div> {
                                    statsList.map((data, idx) => (

                                        <div key={idx}>
                                            {
                                            data.stat.name
                                        }={
                                            data.base_stat
                                        } 
                                        </div>
                                    ))
                                } </div>
                            </Col>
                        </Row>
                    </center>
                </Container>
            </div>
        </React.Fragment>
    ) : null
}

export default PokemonDetail;
