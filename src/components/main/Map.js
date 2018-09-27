import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

export default class Map extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState((prevState) => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }

    render() {
        return (
            <div>
                <Container>
                    <div className="header-1">Карта проезда</div>
                    <div className="map">
                        <Link to={'/transport'} className="button button_yellow button_map">Общественный транспорт</Link>
                        <div onClick={this.toggle} className="map-logo" />
                        <div className={this.state.popoverOpen ? "map-popover" : "map-popover hidden"}>
                            <div className="map-close" onClick={this.toggle} />
                            <b>Адрес ЖК Малахит:</b> Новосибирский район, пос. Садовый, улица Затонского, 106 стр.
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}