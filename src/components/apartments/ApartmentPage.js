import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as apartmentActions from '../../actions/Apartment';
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import DocumentMeta from 'react-document-meta';

import Advantages from '../../components/common/Advantages';
import Gallery from '../../components/common/Gallery';
import ApartmentGallerySlider from '../../components/apartments/ApartmentGallerySlider';
import CollapseBlock from '../../components/common/CollapseBlock';
import Back from '../../components/common/Back';

import Spinner from "../common/Spinner";


class ApartmentPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false
        };

        this.printPage = this.printPage.bind(this);
        this.toggleSpinner = this.toggleSpinner.bind(this);
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        this.props.actions.loadApartmentDetails(params.slug).then(this.toggleSpinner);
    }

    componentWillUnmount() {
        this.props.actions.clearApartmentDetails();
    }

    toggleSpinner() {
        this.setState({isLoaded: true});
    }

    printPage() {
        window.print();
    }

    render() {
        const {apartment, apartmentImages, interiorImages} = this.props;
        const {isLoaded} = this.state;

        const meta = {
            title: `Квартира ${apartment.number}`,
            description: `ЖК Малахит Квартира ${apartment.number}`,
        };

        let dateApartment = "";

        if (apartment.house_status) {
            dateApartment = "Дом сдан";
        } else {
            dateApartment = `Сдача ${apartment.house_quarter} квартал ${apartment.house_year} г.`;
        }

        return (
            <div>
                <DocumentMeta {...meta} />

                <Container>
                    <div className="header-1 margin-b-0">Квартира {apartment.number}</div>

                    <Back/>

                    <Spinner isLoaded={isLoaded}/>

                    <div className={this.state.isLoaded ? "d-block" : "d-none"}>
                        <Row>
                            <Col lg="5" md="12" sm="12" xs="12">
                                {apartmentImages && apartmentImages.length ? <Gallery images={apartmentImages} thumbClass="simple-gallery__thumb" /> : null}

                                <div className="apartment-slider_min-height">
                                    {interiorImages && interiorImages.length ? <ApartmentGallerySlider images={interiorImages} /> : null}
                                </div>
                            </Col>

                            <Col xl="2" lg="1">
                                <img src={apartment.window} className="img-fluid" />
                            </Col>

                            <Col xl="5" lg="6" md="12" sm="12" xs="12">
                                <div className="offer">
                                    <div className="apartment__date">{dateApartment}</div>
                                    <div className="apartment__text">
                                        <p className="first-letter-capitalize"><b>{apartment.type}</b></p>
                                        <p>Дом №{apartment.house_number}</p>
                                        <p>Этаж: {apartment.floor}</p>
                                    </div>
                                    <div className="apartment__line" />
                                    <div className="apartment__text">
                                        <p><b>Площадь</b></p>
                                    </div>

                                    <table className="apartment-table">
                                        <tbody>
                                            <tr>
                                                <td>Общая</td>
                                                <td>{apartment.total_area} кв. м</td>
                                            </tr>
                                            <tr>
                                                <td>Жилая</td>
                                                <td>{apartment.living_space} кв. м</td>
                                            </tr>{ReactHtmlParser(apartment.remaining_area)}
                                        </tbody>
                                    </table>

                                    <div className="apartment__line" />

                                    <div className="d-flex justify-content-between flex-wrap">
                                        <p className="text_green_large">{apartment.price} руб.</p>
                                        <div className="button button_print" onClick={this.printPage}><span>Распечатать</span></div>
                                    </div>
                                </div>

                                <div className="header-2">Дополнительные услуги</div>

                                <CollapseBlock title="Перепланировка" body="<p>Осуществляется с четким соблюдением установленных актуальными нормативно-правовыми актами
                                    правил и действий по осуществлению перепланировки. Стоимость перепланировки уточняется у специалистов отделов продаж.</p>"
                                    doc="/files/replan.pdf"
                                               docName="Памятка по перепланировке: порядок действий при самостоятельной перепланировке"/>

                                <CollapseBlock title="Отделка" body="<p>По проекту дома № 1, 2, 4 (I очередь) и дома № 5, 6, 7, 8 (II очередь), сдаются под самоотделку. Дом № 3 (I очередь) сдается «под ключ».</p>
                                <p>Предоставляем возможность в домах № 5, 6, 7, 8 (II очередь) заказать отделку «под ключ».<br/>Стоимость 5 000 р. / 1 кв. м.</p>"/>
                            </Col>
                        </Row>
                    </div>
                </Container>

                <Advantages/>
            </div>
        );
    }
}

ApartmentPage.propTypes = {
    apartment: PropTypes.object.isRequired,
    apartmentImages: PropTypes.array.isRequired,
    interiorImages: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        apartment: state.apartment,
        apartmentImages: state.apartment.plans.map((item) => {
            return {src : item}
        }),
        interiorImages: state.apartment.interior.map((item) => {
            return {src: item}
        })
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, apartmentActions), dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ApartmentPage);