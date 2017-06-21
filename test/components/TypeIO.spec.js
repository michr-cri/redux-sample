import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import {findDOMNode} from 'react-dom';
import { Provider } from 'react-redux';

import TypeIOContainer from '../../src/app/container/TypeIOContainer';
import store from '../../src/app/store';

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

describe('components', () => {
    describe('App', () => {
        it('should render self', () => {
            const component  = renderer.create(<Provider store={store}>
                <TypeIOContainer />
            </Provider>);

            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should remove one item when remove link is clicked', () => {
            // let typeio = ReactTestUtils.renderIntoDocument(
            //     <Provider store={store}>
            //          <TypeIOContainer />
            //     </Provider>
            // );
            // let typeioDOM = findDOMNode(typeio);
            // // let eventsLength = appDOM.querySelectorAll('.event-list>li').length;
            //
            // let addInput = typeioDOM.querySelector('#exampleInput');
            //
            // $(addInput).selectItem('New York');
            //
            // typeio = ReactTestUtils.renderIntoDocument(
            //     <Provider store={store}>
            //         <TypeIOContainer />
            //     </Provider>
            // );
            // let newTypeioDOM = findDOMNode(typeio);
            // expect(typeioDOM).toEqual(newTypeioDOM);
            //console.log(newTypeioDOM.querySelector('#divResults').innerHTML);
            // let removeLink = typeioDOM.querySelector('#aTypeaheadSelected-MI');
            // console.log(removeLink);
            //ReactTestUtils.Simulate.click(removeLink);
            //
            // expect(appDOM.querySelectorAll('.event-list>li').length).toEqual(eventsLength + 1);
            //
            // expect(appDOM.querySelectorAll('.event-list>li')[0].innerHTML).toContain('MI');
            //TypeIOContainer.handleSelectedTermRemoved('item');
        });
    })
});

