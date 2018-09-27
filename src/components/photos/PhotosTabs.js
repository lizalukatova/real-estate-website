import React from 'react';
import PropTypes from 'prop-types';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Gallery from '../common/Gallery';

export default class PhotosTabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: Object.keys(this.props.months).length,
            isLoaded: false,
            lastMonth: 0
        };

        this.toggle = this.toggle.bind(this);
        this.toggleSpinner = this.toggleSpinner.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    toggleSpinner() {
        this.setState({isLoaded: true});
    }

    render() {
        const {months} = this.props;
        return (
            <div>
                <Nav tabs className="photos-tabs">
                    {Object.keys(months).sort().map((key, i) => {
                        const tabNum = i + 1;
                        const monthString = new Date(2018, key - 1, 1).toLocaleString('ru', {month: 'long'});
                        return <NavItem key={i}>
                            <NavLink className={classnames({active: this.state.activeTab === tabNum})} onClick={() => {this.toggle(tabNum);}}>{monthString}</NavLink>
                        </NavItem>
                    })}
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    {Object.keys(months).sort().map((key, i) => {
                        const tabNum = i + 1;
                        const photosOfMonth = months[key].map((item) => {
                            return {src: item.image, caption: item.description}
                        });
                        const photosOfMonthThumbs = months[key].map((item) => {
                            return {src: item.thumbnail, caption: item.description}
                        });

                        return <TabPane key={i} tabId={tabNum}><Gallery images={photosOfMonth} thumbnails={photosOfMonthThumbs} thumbClass="photo-gallery__thumb" galleryClass="photo-gallery" /></TabPane>
                    })}
                </TabContent>
            </div>
        );
    }
}

PhotosTabs.propTypes = {
    months: PropTypes.object.isRequired
};
