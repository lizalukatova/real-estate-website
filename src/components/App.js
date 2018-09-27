
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import ScrollToTop from './common/ScrollToTop';
import OrderCallModal from './common/OrderCallModal';

import MainLayout from './layouts/MainLayout';
import PageLayout from './layouts/PageLayout';
import Header from './common/Header';
import Footer from '../components/common/Footer';

import MainPage from './main/MainPage';
import ContactPage from './ContactPage';
import TransportPage from './TransportPage';
import FaqPage from './FaqPage';
import CompanyPage from './CompanyPage';
import PhotosPage from './photos/PhotosPage';
import AboutPage from './about/AboutPage';
import BuyingPage from './BuyingPage';
import PlansPage from './plans/PlansPage';
import HousePage from './plans/HousePage';
import OffersPage from './offers/OffersPage';
import OfferPage from './offers/OfferPage';
import EventsPage from './events/EventsPage';
import EventPage from './events/EventPage';
import ApartmentPage from './apartments/ApartmentPage';
import ApartmentsPage from './apartments/ApartmentsPage';
import NotFound from './NotFound';
export default class App extends React.Component{
    constructor(props, context){
        super(props, context);

        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.child.toggle()
    }

    render(){
        return (
            <Router >
                <ScrollToTop>
                    <div className="wrapper">
                        <Header modal={this.openModal} />

                        <Switch>
                            <AppRoute exact path="/" layout={MainLayout} component={MainPage} />
                            <AppRoute path="/contact" layout={PageLayout} component={ContactPage} />
                            <AppRoute path="/transport" layout={PageLayout} component={TransportPage} />
                            <AppRoute path="/about" layout={PageLayout} component={AboutPage} />
                            <AppRoute path="/buying" layout={PageLayout} component={BuyingPage} />
                            <AppRoute path="/faq" layout={PageLayout} component={FaqPage} />
                            <AppRoute path="/company" layout={PageLayout} component={CompanyPage} />
                            <AppRoute path="/photos" layout={PageLayout} component={PhotosPage} />

                            <AppRoute exact path="/plans" layout={PageLayout} component={PlansPage} />
                            <AppRoute path="/plans/:slug" layout={PageLayout} component={HousePage} />

                            <AppRoute exact path="/events" layout={PageLayout} component={EventsPage} />
                            <AppRoute path="/events/:slug" layout={PageLayout} component={EventPage} />

                            <AppRoute exact path="/offers" layout={PageLayout} component={OffersPage} />
                            <AppRoute path="/offers/:slug" layout={PageLayout} component={OfferPage} />

                            <AppRoute exact path="/kvartiry" layout={PageLayout} component={ApartmentsPage} />
                            <AppRoute path="/kvartiry/odnokomnatnye" layout={PageLayout} component={ApartmentsPage}/>
                            <AppRoute path="/kvartiry/dvuhkomnatnye" layout={PageLayout} component={ApartmentsPage}/>
                            <AppRoute path="/kvartiry/trehkomnatnye" layout={PageLayout} component={ApartmentsPage}/>
                            <AppRoute path="/kvartiry/chetyrehkomnatnye" layout={PageLayout} component={ApartmentsPage}/>
                            <AppRoute path="/kvartiry/pyatikomnatnye" layout={PageLayout} component={ApartmentsPage}/>
                            <AppRoute path="/kvartiry/s-terrasoy" layout={PageLayout} component={ApartmentsPage}/>
                            <AppRoute path="/kvartiry/:slug" layout={PageLayout} component={ApartmentPage} />
                            <AppRoute path="*" layout={PageLayout} component={NotFound} />

                        </Switch>

                        <Footer modal={this.openModal} />

                        <OrderCallModal onRef={ref => (this.child = ref)} />
                    </div>
                </ScrollToTop>
            </Router>
        );
    }
}

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
        <Layout>
            <Component {...props} />
        </Layout>
    )} />
);

AppRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
    layout: PropTypes.func.isRequired,
};
