import React from "react";

const Image = (props) => {
    const { largeImageURL, likes, previewURL, tags, views } = props.image;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="img-card-top" />
                <div class="card-body text-center">
                    <h5 className="card-text">{likes} likes</h5>
                    <h5 className="card-text">{views} views</h5>
                    <a
                        href={largeImageURL}
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-success btn-block"
                    >
                        View Image
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Image;
