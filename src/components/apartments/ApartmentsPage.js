import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter, Link} from 'react-router-dom';
import qs from 'qs';
import * as apartmentActions from '../../actions/Apartment';
import * as seoActions from '../../actions/Seo';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import DocumentMeta from 'react-document-meta';
import arrayUp from '../../images/common/sort_up.png';
import arrayDown from '../../images/common/sort_down.png';

import Advantages from '../../components/common/Advantages';
import ApartmentSelect from '../apartments/ApartmentSelect';

import Pagination from "../common/Pagination";
import Spinner from "../common/Spinner";

const apartmentTypes = [
    {
        name: "Ст",
        value: "0"
    },
    {
        name: "1",
        value: "1"
    },
    {
        name: "2",
        value: "2"
    },
    {
        name: "3",
        value: "3"
    },
    {
        name: "4",
        value: "4"
    },
    {
        name: "5",
        value: "5"
    }
];

function replaceSpaces(sting) {
    return sting.replace(/\s+/g,'');
}

const initialFilter = {
    types: [],
    areaFrom: '',
    areaTo: '',
    priceFrom: '',
    priceTo: '',
    houseNum: '0',
    terrace: false,
    page: 1
};

class ApartmentsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            filter: initialFilter,
            apartments: [],
            pageOfItems: [],
            seo: [],
            sort: [false,false,false,false,false,false],
            arrows: [arrayUp,arrayUp,arrayUp,arrayUp,arrayUp,arrayUp]
        };
        this.arrows = [];

        this.toggleSpinner = this.toggleSpinner.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.filter = this.filter.bind(this);
        this.isExistQuery = this.isExistQuery.bind(this);
        this.queryFilter = this.queryFilter.bind(this);
        this.navigateTo = this.navigateTo.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.sort = this.sort.bind(this);
    }

    componentDidMount() {
        //if (this.props.location.pathname === '/apartments') {
            this.props.actions.loadSeo();
            this.props.actions.loadApartments().then(this.toggleSpinner).then(this.navigateTo);
        //} else {
            //this.props.actions.loadApartments().then(this.toggleSpinner);
        //}

    }

    componentWillUnmount() {
        this.props.actions.clearApartments();
        this.props.actions.clearSeo();
    }

    componentWillUpdate(nextProps, nextState) {
        const pageChanged = +nextState.filter.page !== +this.state.filter.page;
        if (pageChanged) {
            this.props.history.push({
                search: '?' + qs.stringify(nextState.filter)
            });
        }

        const locationChanged = nextProps.location !== this.props.location;

        if (locationChanged) {
            this.queryFilter(nextProps.filter);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.apartments !== nextProps.apartments) {
            this.setState({
                apartments: nextProps.apartments
            });
            this.queryFilter(nextProps.filter);
        }
    }

    onChangePage(pagesInfo) {
        const {currentPage, items} = pagesInfo;
        let newFilter;

        this.setState(function(prevState) {
            newFilter = Object.assign({}, prevState.filter);

            newFilter['page'] = currentPage;

            return {filter: newFilter}
        });

        this.setState({ pageOfItems: items });
    }

    queryFilter(filter) {
        let queryFilter = Object.assign({}, filter);

        if (this.isExistQuery(queryFilter)) {
            Object.keys(queryFilter).forEach(key => queryFilter[key] === undefined && delete queryFilter[key]);

            this.setState(function(prevState) {
                const newFilter = Object.assign({}, prevState.filter, queryFilter);
                const types = newFilter['types'];

                if (typeof types === 'string') {
                    newFilter['types'] = [types]
                }

                if (newFilter['terrace']) {
                    newFilter['terrace'] = (newFilter['terrace'] === "true")
                }

                return {filter: newFilter};
            }, () => {
                this.setState({
                    apartments: this.filter()
                });
            });
        } else {
            const {apartments, seo} = this.props;
            this.setState({
                apartments: apartments,
                filter: initialFilter,
                seo: seo
            });
        }
    }

    isExistQuery(filter){
        return !!Object.keys(filter).find(k => filter[k] !== undefined);
    }

    navigateTo(){
        const {apartments, seo} = this.props;
        let advancedFilter = initialFilter;

        switch (this.props.location.pathname) {
            case "/kvartiry/odnokomnatnye":
                advancedFilter['types'] = [];
                advancedFilter['types'].push('0','1');
                advancedFilter['terrace'] = false;
                this.setState(function() {
                    return {
                        apartments: apartments,
                        filter: advancedFilter,
						seo: seo
                    };
                }, () => {
                    this.setState({
                        apartments: this.filter()
                    });
                });
                break;
            case "/kvartiry/dvuhkomnatnye":
                advancedFilter['types'] = [];
                advancedFilter['types'].push('2');
                advancedFilter['terrace'] = false;
                this.setState(function() {
                    return {
                        apartments: apartments,
                        filter: advancedFilter,
						seo: seo
                    };
                }, () => {
                    this.setState({
                        apartments: this.filter()
                    });
                });
                break;
            case "/kvartiry/trehkomnatnye":
                advancedFilter['types'] = [];
                advancedFilter['types'].push('3');
                advancedFilter['terrace'] = false;
                this.setState(function() {
                    return {
                        apartments: apartments,
                        filter: advancedFilter,
						seo: seo
                    };
                }, () => {
                    this.setState({
                        apartments: this.filter()
                    });
                });
                break;
            case "/kvartiry/chetyrehkomnatnye":
                advancedFilter['types'] = [];
                advancedFilter['types'].push('4');
                advancedFilter['terrace'] = false;
                this.setState(function() {
                    return {
                        apartments: apartments,
                        filter: advancedFilter,
						seo: seo
                    };
                }, () => {
                    this.setState({
                        apartments: this.filter()
                    });
                });
                break;
            case "/kvartiry/pyatikomnatnye":
                advancedFilter['types'] = [];
                advancedFilter['types'].push('5');
                advancedFilter['terrace'] = false;
                this.setState(function() {
                    return {
                        apartments: apartments,
                        filter: advancedFilter,
						seo: seo
                    };
                }, () => {
                    this.setState({
                        apartments: this.filter()
                    });
                });
                break;
            case "/kvartiry/s-terrasoy":
                advancedFilter['types'] = [];
                advancedFilter['terrace'] = true;
                this.setState(function() {
                    return {
                        apartments: apartments,
                        filter: advancedFilter,
						seo: seo
                    };
                }, () => {
                    this.setState({
                        apartments: this.filter()
                    });
                });
                break;
            default:
                // this.props.history.push({
                //     search: '?' + qs.stringify(this.state.filter)
                // });
                console.log(window.location.search);
                if (window.location.search == "") {
                    advancedFilter['types'] = [];
                    advancedFilter['terrace'] = false;
                } else {
                    console.log(advancedFilter);
                    console.log(this.props.filter);
                    for (let key in this.props.filter) {
                        switch (key) {
                            case 'types':
                                advancedFilter[key] = this.props.filter[key];
                                break;
                            case 'terrace':
                                //advancedFilter[key] = this.props.filter[key];
                                (this.props.filter[key] === "false") ? (advancedFilter[key] = false) : (advancedFilter[key] = true);
                                break;
                            default:
                                if (this.props.filter[key] !== "") {
                                    advancedFilter[key] = this.props.filter[key];
                                }
                        }
                    }
                    // let oldFilters = {
                    //     types: this.props.filter['types'],
                    //     areaFrom: this.props.filter['areaFrom'],
                    //     areaTo: this.props.filter['areaTo'],
                    //     priceFrom: this.props.filter['priceFrom'],
                    //     priceTo: this.props.filter['priceTo'],
                    //     houseNum: this.props.filter['houseNum'],
                    //     terrace: this.props.filter['terrace'],
                    //     page: this.props.filter['page']
                    // };
                    // advancedFilter = oldFilters;
                }

                this.setState(function() {
                    return {
                        apartments: apartments,
                        filter: advancedFilter
                    };
                }, () => {
                    this.setState({
                        apartments: this.filter()
                    });
                });
        }


    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState(function(prevState) {
            const newFilter = Object.assign({}, prevState.filter);
            newFilter[name] = value;

            return {filter: newFilter};
        });
    }

    toggleSpinner() {
        this.setState({isLoaded: true});
    }

    handleFilter() {

            // if (this.props.location.pathname !== "/kvartiry") {
            //     this.props.history.push({
            //         search: '?' + qs.stringify(this.state.filter)
            //     });
            // } else {
            //     this.navigateTo();
            // }

        this.props.history.push({
            search: '?' + qs.stringify(this.state.filter)
        });



            this.setState(function(prevState) {

                let newFilter = Object.assign({}, prevState.filter);

                newFilter['page'] = 1;

                return {filter: newFilter}
            });


    }

    handleSort(idSort) {
        let {apartments,sort,arrows} = this.state;
        let sortedApartments = apartments;
        let allSorts = {
            0: "room_qnt",
            1: "total_area",
            2: "living_space",
            3: "floor",
            4: "house_number",
            5: "price",
        };

        if (!sort[idSort]) {
            sortedApartments = this.sort(allSorts[idSort], apartments);

            arrows = [arrayUp,arrayUp,arrayUp,arrayUp,arrayUp,arrayUp];
            sort = [false,false,false,false,false,false];
            sort[idSort] = 'up';
            arrows[idSort] = arrayDown;
        } else if (sort[idSort] === 'up') {
            sortedApartments = [...apartments].reverse();
            sort[idSort] = 'down';
            arrows[idSort] = arrayUp;
        } else if (sort[idSort] === 'down') {
            sortedApartments = [...apartments].reverse();
            sort[idSort] = 'up';
            arrows[idSort] = arrayDown;
        }

        this.setState({
            apartments: sortedApartments,
            sort: sort,
            arrows: arrows
        });
    }

    filter() {
        const {apartments} = this.props;
        const {houseNum, types, terrace, areaFrom, areaTo, priceFrom, priceTo} = this.state.filter;

        function byHouseNum(value) {
            if (houseNum === '0' || houseNum === value.house_number) {
                return true;
            }
        }

        function byType(value) {
            let numTypes = types.map((item) => +item);

            if (numTypes.indexOf(value.room_qnt) !== -1 || !numTypes.length) {
                return true;
            }
        }

        function byTerrace(value) {
            if (+terrace === value.terrace || !terrace) {
                return true;
            }
        }

        function byArea(value) {
            if ((+areaFrom <= +value.total_area && +value.total_area <= +areaTo) || (+areaFrom <= +value.total_area && !areaTo)) {
                return true;
            }
        }

        function byPrice(value) {
            const price = +replaceSpaces(value.price);
            const priceFromNum = +replaceSpaces(priceFrom);
            const priceToNum = +replaceSpaces(priceTo);

            if ((priceFromNum <= price && price <= priceToNum) || (priceFromNum <= price && !priceToNum)) {
                return true;
            }
        }

        const filteredApartments = apartments.filter(byHouseNum).filter(byType).filter(byTerrace).filter(byArea).filter(byPrice);
        let sortedApartments = filteredApartments;
        const {sort} = this.state;
        const isSortedUp = sort.indexOf("up");
        const isSortedDown = sort.indexOf("down");
        let allSorts = {
            0: "room_qnt",
            1: "total_area",
            2: "living_space",
            3: "floor",
            4: "house_number",
            5: "price",
        };

        if (isSortedUp !== -1) {
            sortedApartments = this.sort(allSorts[isSortedUp], filteredApartments);
        } else if (isSortedDown !== -1) {
            sortedApartments = this.sort(allSorts[isSortedDown], filteredApartments).reverse();
        }

        return sortedApartments;
    }

    sort(field, apartments) {
        let sortedApartments;

        switch (field) {
            case "floor" :
                sortedApartments = [...apartments].sort((a, b) => a[field].localeCompare(b[field]));
                break;
            case "price" :
                sortedApartments = [...apartments].sort((a, b) => {
                    const firstPrice = replaceSpaces(a[field]);
                    const secondPrice = replaceSpaces(b[field]);

                    return firstPrice - secondPrice
                });
                break;
            default : sortedApartments = [...apartments].sort((a, b) => a[field] - b[field]);
        }
        return sortedApartments;
    }

    render() {
        const {types, areaFrom, areaTo, houseNum, priceFrom, priceTo, terrace, page} = this.state.filter;
        const {apartments, isLoaded, pageOfItems, seo} = this.state;


        const meta = {
            title: seo.title ? seo.title : 'Квартиры',
            description: seo.description ? seo.description : 'ЖК Малахит Подобрать квартиру'
        };

        return (
            <div>
                <DocumentMeta {...meta} />

                <Container>
                    <div className="header-1 mb-4">{seo.h1 ? seo.h1 : "Подобрать квартиру"}</div>
                </Container>

                <div className="apartment-search">
                    <Container>
                        <Form className="d-flex flex-wrap justify-content-between align-items-center apartment-search__form">
                            <FormGroup>
                                <select className="form-control" name="houseNum" value={houseNum} onChange={this.handleChange}>
                                    <option value="0">Все дома</option>
                                    <option value="1">1 дом</option>
                                    <option value="2">2 дом</option>
                                    <option value="3">3 дом</option>
                                    <option value="4">4 дом</option>
                                    <option value="5">5 дом</option>
                                    <option value="6">6 дом</option>
                                    <option value="7">7 дом</option>
                                    <option value="8">8 дом</option>
                                </select>
                            </FormGroup>
                            <FormGroup>
                                <Label className="font-weight-bold">Количество комнат</Label>
                                <ApartmentSelect name="types" options={apartmentTypes} values={types} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="checkbox apartment-search__form__checkbox">
                                <Label check>
                                    <Input type="checkbox" name="terrace" value={terrace} checked={terrace} onChange={this.handleChange} />{' '}
                                    <span className="cr"><i className="cr-icon fa fa-check" /></span>
                                    <span className="apartment-search__form__terrace">С террасой</span>
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Label className="font-weight-bold">Цена от - до, руб.</Label>
                                <div className="d-flex justify-content-between align-items-center apartment-search__form__price">
                                    <Input type="text" name="priceFrom" value={priceFrom} onChange={this.handleChange} />
                                    <span className="font-weight-bold">-</span>
                                    <Input type="text" name="priceTo" value={priceTo} onChange={this.handleChange} /></div>
                            </FormGroup>
                            <FormGroup>
                                <Label className="font-weight-bold">Площадь от - до, м<sup>2</sup></Label>
                                <div className="d-flex justify-content-between align-items-center apartment-search__form__area">
                                    <Input type="text" name="areaFrom" value={areaFrom} onChange={this.handleChange} />
                                    <span className="font-weight-bold">-</span>
                                    <Input type="text" name="areaTo" value={areaTo} onChange={this.handleChange} />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Button className="apartment-search__form__search button_gradient" onClick={this.handleFilter}>Найти</Button>
                            </FormGroup>
                        </Form>
                    </Container>
                </div>

                <Container className="pb-5">
                    <Spinner isLoaded={isLoaded}/>

                    <div className={isLoaded ? "d-block" : "d-none"}>
                        <table className="apartments-table">
                            <thead>
                                <tr>
                                    <th>Количество комнат <img className="sort-arrow img-fluid" src={this.state.arrows[0]} onClick={() => this.handleSort(0)} /></th>
                                    <th>Общая площадь, м<sup>2</sup> <img className="sort-arrow img-fluid" src={this.state.arrows[1]} onClick={() => this.handleSort(1)} /></th>
                                    <th>Жилая площадь, м<sup>2</sup> <img className="sort-arrow img-fluid" src={this.state.arrows[2]} onClick={() => this.handleSort(2)} /></th>
                                    <th>Этаж <img className="sort-arrow img-fluid" src={this.state.arrows[3]} onClick={() => this.handleSort(3)} /></th>
                                    <th>Дом № <img className="sort-arrow img-fluid" src={this.state.arrows[4]} onClick={() => this.handleSort(4)} /></th>
                                    <th>Терраса</th>
                                    <th>Цена, руб. <img className="sort-arrow img-fluid" src={this.state.arrows[5]} onClick={() => this.handleSort(5)} /></th>
                                </tr>
                            </thead>
                            <tbody>
                            {pageOfItems.map((item, i) =>
                                <tr key={i}>
                                    <td><Link to={`/kvartiry/${item.slug}`}>{(item.room_qnt === 0) ? 'Ст' : item.room_qnt}</Link></td>
                                    <td><Link to={`/kvartiry/${item.slug}`}>{item.total_area}</Link></td>
                                    <td><Link to={`/kvartiry/${item.slug}`}>{item.living_space}</Link></td>
                                    <td><Link to={`/kvartiry/${item.slug}`}>{item.floor}</Link></td>
                                    <td><Link to={`/kvartiry/${item.slug}`}>{item.house_number}
                                            <span className="apartments-table__house-ready">{(item.house_status) ? "Дом сдан" : (item.house_quarter + "кв." + item.house_year)}</span>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/kvartiry/${item.slug}`}>
                                            <div className={item.terrace === 1 ? "apartments-table__terrace_check active" : "apartments-table__terrace_check"} />
                                        </Link>
                                    </td>
                                    <td><Link to={`/kvartiry/${item.slug}`}><span className="apartments-table__price">{item.price}</span></Link></td>
                                </tr>
                            )}
                            </tbody>
                        </table>

                        <Pagination items={apartments} onChangePage={this.onChangePage} pageSize={10} initialPage={+page} />

                        <p className="pt-5">
                            Если вы рассматриваете квартиры в пригороде Новосибирска, вам обязательно стоит обратить внимание на малоэтажный
                            жилой квартал комфорт-класса «Малахит». Комплекс достаточно удалён от шумного пыльного города, при этом близость
                            магистральных дорог и автомобильных развязок гарантирует жильцам отсутствие проблем с транспортной доступностью.
                        </p>
                        <p>Квартиры в новостройке от застройщика здесь предложены на любой вкус:</p>
                        <ul className="ul-padding">
                            <li>- студии;</li>
                            <li>- однокомнатные;</li>
                            <li>- двухкомнатные;</li>
                            <li>- трёхкомнатные;</li>
                            <li>- четырёхкомнатные;</li>
                            <li>- пятикомнатные.</li>
                        </ul>
                        <p>Все квартиры комфортные и просторные, при этом стоят недорого. Жильё сдаётся как с отделкой под ключ, так и с
                            чистовой отделкой под самостоятельный ремонт. Будущие владельцы не ограничены строгими рамками планировок:
                            по их желанию возможно объединить несколько квартир в одну, либо произвести перепланировку.</p>
                        <p>
                            Купить квартиру за городом в ЖК «Малахит» стоит так же потому, что здесь удобство жильцов стоит на первом месте.
                            Застройщик тщательно продумал будущую инфраструктуру, безопасность и благоустройство и в срок сдаёт все
                            запланированные объекты.
                        </p>

                        <div dangerouslySetInnerHTML={{__html: seo.text}} />
                    </div>
                </Container>

                <Advantages/>
            </div>
        );
    }
}

ApartmentsPage.propTypes = {
    apartments: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    filter: PropTypes.object,
    seo: PropTypes.object,
    history: PropTypes.object,
    location: PropTypes.object,
};

function mapStateToProps(state, ownProps) {
    const query = ownProps.location.search.length ? qs.parse(ownProps.location.search.substr(1)) : {};
    let filter = {
        types: query.types,
        areaFrom: query.areaFrom,
        areaTo: query.areaTo,
        priceFrom: query.priceFrom,
        priceTo: query.priceTo,
        houseNum: query.houseNum,
        terrace: query.terrace,
        page: query.page
    };

    return {
        apartments: state.apartments,
        filter: filter,
        seo: state.seo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, apartmentActions, seoActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ApartmentsPage));