import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import Lightbox from 'react-images';

export default class ApartmentGallerySlider extends React.Component {
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
        this.renderGallery = this.renderGallery.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state !== nextState;
    }

    componentWillReceiveProps() {
        this.setState(this.state);
    }

    openLightbox (index) {
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
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

    renderGallery() {
        const {images} = this.props;

        if (!images || images.length <= 0) return;

        const gallery = images.map((obj, i) =>
            <div key={i}>
                <img src={obj.src} />
            </div>
        );

        return (
            <div className="gallery-slider">
                <Carousel selectedItem={this.state.currentImage} onClickItem={(i) => this.openLightbox(i)} showIndicators={false} showStatus={false} dynamicHeight>{gallery}</Carousel>
            </div>
        );
    }

    render() {
        const {images} = this.props;

        return (
            <div>
                {this.renderGallery()}
                <Lightbox images={images}
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

ApartmentGallerySlider.propTypes = {
    images: PropTypes.array.isRequired,
};