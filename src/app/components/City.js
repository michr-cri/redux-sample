import React from 'react';
import util from '../shared/util';
import history from '../shared/history';
import {Link} from 'react-router-dom';

class City extends React.Component {

    componentDidMount() {
        let page = Number(util.getUrlParam('page')?util.getUrlParam('page'):1);
        this.props.fetchCities(this.props.page, this.props.pageSize);

        history.listen((location, action) => {
            let page = Number(util.getUrlParam('page')?util.getUrlParam('page'):1);

            this.props.fetchCities(page, this.props.pageSize);
            this.props.goToPage(page);
        });
    }

    handlePrevClicked() {
        this.props.goToPage(this.props.page-1);
        history.push('/cities?page=' + (this.props.page-1) + '&page-size=' + this.props.pageSize);
    }

    handleNextClicked() {
        this.props.goToPage(this.props.page+1);
        history.push('/cities?page=' + (this.props.page+1) + '&page-size=' + this.props.pageSize);
    }

    render() {
        console.log(this.props.cities);
        let pageNums = Array.apply(null, {length: Math.ceil(this.props.totalCount/this.props.pageSize) + 1}).map(Number.call, Number).slice(1)
        return (
            <div>
                <ul className='city-list'>
                    {this.props.cities.map((city, index) => <li key={index}>{city.name}</li>)}
                </ul>

                <a id="aPrev" className={this.props.page===1?"disabled":""} onClick={this.handlePrevClicked.bind(this)} href="javascript:void(0);">Prev</a>
                {pageNums.map((pageNum, index) => <Link key={index} to={{
                    pathname: '/cities',
                    search: '?page='+ pageNum + '&page-size=' + this.props.pageSize
                }} >{pageNum}</Link>)}
                <a id="aNext" className={this.props.page===Math.ceil(this.props.totalCount/this.props.pageSize)?"disabled":""}
                   onClick={this.handleNextClicked.bind(this)} href="javascript:void(0);">Next</a>
            </div>
        );
    }
}

export default City;
