import React from 'react';
import {cleanup, render} from '@testing-library/react-native'
import ReccomendationScreen from '../ReccomendationScreen'

describe('Reccomendation Screen', () => {
    afterEach(cleanup)
    it('should render correctly', () => {
        const toJson = render(<ReccomendationScreen />)
        expect(toJson).toMatchSnapshot();
    })
})