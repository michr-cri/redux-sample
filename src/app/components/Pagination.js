import React from 'react';
import util from '../shared/util';
import {Link} from 'react-router-dom';

class Pagination extends React.Component {

    componentDidMount() {
        let page = util.getUrlParam('page');
        let pageSize = util.getUrlParam('page-size');

        this.props.fetchCities(page, pageSize);
    }

    render() {
        return (
            <div>
                <ul className='city-list'>
                    {this.props.cities.map((city, index) => <li key={index}>{city.name}</li>)}
                </ul>
                {/*<Link to="/pagination?page=2&page-size=1">2</Link>*/}
                <a href="/#/pagination?page=2&page-size=1">2</a>
            </div>
        );
    }
}

export default Pagination;
