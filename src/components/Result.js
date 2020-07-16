import React, { Component, Fragment } from "react";
import Image from "./Image";
import Pagination from "./Pagination";

class Result extends Component {
    showImages = () => {
        const images = this.props.images;

        if (images.length === 0) {
            return null;
        }

        return (
            <Fragment>
                <div className="col-12 p-5 row">
                    {images.map((image) => (
                        <Image key={image.id} image={image} />
                    ))}
                </div>
                <Pagination
                    previousPage={this.props.previousPage}
                    nextPage={this.props.nextPage}
                />
            </Fragment>
        );
    };

    render() {
        return <Fragment>{this.showImages()}</Fragment>;
    }
}

export default Result;
