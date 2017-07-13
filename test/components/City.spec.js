import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import reducer from '../../src/app/reducers/reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {findDOMNode} from 'react-dom';
import { Provider } from 'react-redux';
import {Router} from 'react-router-dom';
import history from '../../src/app/shared/history';
import CityApi from '../../src/app/apis/CityApi';
import CityContainer from '../../src/app/container/CityContainer';

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

let component;
describe('components', () => {
    describe('City', () => {

        beforeAll(()=> {
            let initialState = {
                city: {
                    page: 1,
                    pageSize: 2,
                    cities: [],
                    totalCount: 0
                }
            };
            let cities = [{id: 1, name: 'Ann Arbor'}, {id: 2, name: 'Detroit'}];
            let totalCount = 7;
            let paginationResult = {page: cities, totalCount: totalCount};
            let fetchCitiesPromise = new Promise(function(resolve) {resolve(paginationResult);});

            jest.spyOn(CityApi, 'fetchCities').mockReturnValue(fetchCitiesPromise);
            let store = createStore(reducer, initialState, applyMiddleware(thunk));

            component  = ReactTestUtils.renderIntoDocument(
                <Provider store={store}>
                    <Router history={history}>
                        <CityContainer />
                    </Router>
                </Provider>
            );
        });

        it('should render self', () => {
            let componentDOM = findDOMNode(component);
            expect(componentDOM.querySelectorAll('.city-list>li').length).toEqual(2);

            expect(componentDOM.querySelectorAll('.city-list>li')[0].innerHTML).toContain('Ann Arbor');
            expect(componentDOM.querySelectorAll('.city-list>li')[1].innerHTML).toContain('Detroit');
        });

        it('Prev link clicked', () => {
            let cities = [{id: 3, name: 'New York'}, {id: 4, name: 'LA'}];
            let totalCount = 7;
            let paginationResult = {page: cities, totalCount: totalCount};
            let fetchCitiesPromise = new Promise(function(resolve) {resolve(paginationResult);});

            jest.spyOn(CityApi, 'fetchCities').mockReturnValue(fetchCitiesPromise);
            let componentDOM = findDOMNode(component);
            let prevLink = componentDOM.querySelector('#aPrev');
            ReactTestUtils.Simulate.click(prevLink);

            component.forceUpdate();

            setTimeout(function() {
                let newComponentDOM = findDOMNode(component);

                expect(newComponentDOM.querySelectorAll('.city-list>li').length).toEqual(2);

                expect(newComponentDOM.querySelectorAll('.city-list>li')[0].innerHTML).toContain('New York');
                expect(newComponentDOM.querySelectorAll('.city-list>li')[1].innerHTML).toContain('LA');
            },0);
        });

        it('Next link clicked', () => {
            let cities = [{id: 5, name: 'SF'}, {id: 6, name: 'Seattle'}];
            let totalCount = 7;
            let paginationResult = {page: cities, totalCount: totalCount};
            let fetchCitiesPromise = new Promise(function(resolve) {resolve(paginationResult);});

            jest.spyOn(CityApi, 'fetchCities').mockReturnValue(fetchCitiesPromise);
            let componentDOM = findDOMNode(component);
            let nextLink = componentDOM.querySelector('#aNext');
            ReactTestUtils.Simulate.click(nextLink);

            component.forceUpdate();

            setTimeout(function() {
                let newComponentDOM = findDOMNode(component);

                expect(newComponentDOM.querySelectorAll('.city-list>li').length).toEqual(2);

                expect(newComponentDOM.querySelectorAll('.city-list>li')[0].innerHTML).toContain('SF');
                expect(newComponentDOM.querySelectorAll('.city-list>li')[1].innerHTML).toContain('Seattle');
            },0);
        });
    })
});

