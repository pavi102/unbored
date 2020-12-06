import React from 'react';
import {cleanup, render} from '@testing-library/react-native'
import HomeScreen from '../HomeScreen'

describe('Home screen', () => {
    afterEach(cleanup)
    it('should render correctly', () => {
        const toJson = render(<HomeScreen />)
        expect(toJson).toMatchSnapshot();
    })
})
    