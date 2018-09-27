import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0
        };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    openLightbox (index) {
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    gotoPrevious() {
        this.setState((prevState) => ({
            currentImage: prevState.currentImage - 1
        }));
    }

    gotoNext() {
        this.setState((prevState) => ({
            currentImage: prevState.currentImage + 1
        }));
    }

    renderGallery () {
        let images;
        this.props.thumbnails ? images = this.props.thumbnails : images = this.props.images;
        const { thumbClass } = this.props;
        const { galleryClass } = this.props;

        if (!images || images.length <= 0) return;

        const gallery = images.map((obj, i) =>
                <div className={thumbClass} key={i} onClick={() => this.openLightbox(i)}>
                    <img src={obj.src} className="img-fluid" title={obj.caption} />
                </div>
        );

        return (
            <div className={galleryClass}>
                {gallery}
            </div>
        );
    }

    render () {
        return (
            <div>
                {this.renderGallery()}
                <Lightbox images={this.props.images}
                          onClose={this.closeLightbox}
                          onClickPrev={this.gotoPrevious}
                          onClickNext={this.gotoNext}
                          currentImage={this.state.currentImage}
                          isOpen={this.state.lightboxIsOpen}
                />
            </div>
        );
    }
}

Gallery.propTypes = {
    images: PropTypes.array.isRequired,
    thumbnails: PropTypes.array,
    thumbClass: PropTypes.string,
    galleryClass: PropTypes.string,
};
