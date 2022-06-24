import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Index from '../pages/index'
import { WELCOME_MESSAGE } from '../constants/labels'

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      render(<Index/>);
      const welcomeMsg = screen.getByText(WELCOME_MESSAGE);
      expect(welcomeMsg).toBeInTheDocument();
    })
  })  
})