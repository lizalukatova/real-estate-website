import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Carousel, CarouselItem, CarouselControl, Container, Row, Col } from 'reactstrap';

export default class MainSlider extends React.Component {
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
        const { slides } = this.props;

        if (this.animating) return;
        const nextIndex = this.state.activeIndex === slides.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        const { slides } = this.props;

        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? slides.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    render() {
        const { activeIndex } = this.state;
        const { slides } = this.props;

        const slidesInfo = slides.map((item, id) => (
            <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={id} className="main-slide" tag="div">
                <img src={item.slider_img} className="main-slide__image" />
                <div className="main-slide__caption">
                    <Container>
                        <Row>
                            <Col xl={{ size: '6', offset: 6 }} lg={{ size: '7', offset: 5 }}>
                                <div className="main-slide__caption__block">
                                    <div className="main-slide__caption__header">{item.name}</div>
                                    <div className="main-slide__caption__text">{item.short_desc}</div>
                                    {item.offer ?
                                        <Link to={`/offers/${item.slug}`} className="button button_yellow main-slide__caption__link">Подробнее</Link> : ""
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </CarouselItem>
        ));

        return (
            <Carousel className="main-slider" activeIndex={activeIndex} next={this.next} previous={this.previous}>
                {slidesInfo}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}

MainSlider.propTypes = {
    slides: PropTypes.array.isRequired
};