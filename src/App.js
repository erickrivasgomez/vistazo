import React, { Component } from "react";
import Seeker from "./components/Seeker";
import Result from "./components/Result";

class App extends Component {
    state = {
        searchString: "",
        currentPage: "",
        images: [],
    };

    callAPI = () => {
        const searchString = this.state.searchString;
        const requestedPage = this.state.currentPage;
        const url = `https://pixabay.com/api/?key=17466313-bb2ad8a6c0e29befaa427b7bc&q=${searchString}&page=${requestedPage}`;

        fetch(url)
            .then((response) => response.json())
            .then((result) =>
                this.setState({
                    images: result.hits,
                })
            );
        this.scroll();
    };

    searchString = (searchString) => {
        this.setState(
            {
                searchString: searchString,
                currentPage: 1,
            },
            () => {
                this.callAPI();
            }
        );
    };

    previousPage = () => {
        let currentPage = this.state.currentPage;
        currentPage === 1 ? currentPage = 1 : currentPage--;
        this.setState(
            {
                currentPage,
            },
            () => {
                this.callAPI();
            }
        );
    };

    nextPage = () => {
        let currentPage = this.state.currentPage;
        currentPage++;
        this.setState(
            {
                currentPage,
            },
            () => {
                this.callAPI();
            }
        );
    };

    scroll = () => {
        const element = document.querySelector(".jumbotron");
        element.scrollIntoView("smooth", "start");
    };

    render() {
        return (
            <div className="app container">
                <div className="jumbotron text-center">
                    <div className="d-flex justify-content-center">
                    <img className="img-fluid" src="./logo.png" alt="Logo Vistazo"/>
                    <h1>Vistazo</h1>
                    </div>
                    <p className="lead">Buscador de imágenes</p>
                    <Seeker searchString={this.searchString} />
                </div>
                <div className="row justify-content-center">
                    <Result
                        images={this.state.images}
                        previousPage={this.previousPage}
                        nextPage={this.nextPage}
                    />
                </div>
            </div>
        );
    }
}
export default App;
