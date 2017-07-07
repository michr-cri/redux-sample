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
    })
});

