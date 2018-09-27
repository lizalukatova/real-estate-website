import React from 'react';
import PropTypes from 'prop-types';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

export default class HouseSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = { activeIndex: 0 };

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.images.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.images.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = this.props.images.map((item, i) => (
            <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={i} tag="div">
                <img src={item} />
            </CarouselItem>
        ));

        return (
            <Carousel className="simple-slider" activeIndex={activeIndex} next={this.next} previous={this.previous}>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}


HouseSlider.propTypes = {
    images: PropTypes.array.isRequired,
};