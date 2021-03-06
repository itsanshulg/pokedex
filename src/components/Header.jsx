import React,{useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


const Header = ({onSearch}) => {

    const [search, setSearch] = useState();

    const handleOnChange = (event) => {

        setSearch(event.target.value);
    }

    const handleSearch = (event) => {
        
        event.preventDefault();
        onSearch(search.toLowerCase());

    }

    return (
        <Navbar className="navbar-dark bg-success"  expand="lg">
            <Container fluid>
                <Navbar.Brand href="/home">Pokedex |</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"
                        style={
                            {maxHeight: '100px'}
                        }
                        navbarScroll>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" value={search} onChange={handleOnChange}/>
                        <Button className="btn btn-outline-light" variant="outline-success" onClick={handleSearch}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
