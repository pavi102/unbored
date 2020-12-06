import React from 'react';
import {cleanup, render} from '@testing-library/react-native'
import ActivityScreen from '../ActivityScreen'

describe('Activity Screen', () => {
    afterEach(cleanup)
    it('should render correctly', () => {
        const toJson = render(<ActivityScreen />)
        expect(toJson).toMatchSnapshot();
    })
})