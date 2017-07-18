import React from 'react';
import renderer from 'react-test-renderer';
import {findDOMNode} from 'react-dom';

import Feedback from '../../../src/app/shared/components/Feedback';

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

describe('components', () => {
    describe('Feedback', () => {
        it('should render self', () => {
            const component  = renderer.create(
                <Feedback feedback={{title: 'title', message: 'message'}}/> );

            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });
    })
});

