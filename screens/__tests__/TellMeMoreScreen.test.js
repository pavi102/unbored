import React from 'react';
import {cleanup, render} from '@testing-library/react-native'
import TellMeMoreScreen from '../TellMeMoreScreen'

describe('Tell Me More', () => {
    afterEach(cleanup)
    it('should render correctly', () => {
        const toJson = render(<TellMeMoreScreen />)
        expect(toJson).toMatchSnapshot();
    })
})