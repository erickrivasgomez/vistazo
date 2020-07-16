import React, { Component } from "react";

class Seeker extends Component {
    
    searchRef = React.createRef();

    getData = (e) => {
        e.preventDefault();

        const searchString = this.searchRef.current.value;
        this.props.searchString(searchString);
    }

    render() {
        return (
            <form onSubmit={this.getData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input
                            ref={this.searchRef}
                            type="text"
                            className="form-control"
                            placeholder="Busca una imagen..."
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Buscar"
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default Seeker;
