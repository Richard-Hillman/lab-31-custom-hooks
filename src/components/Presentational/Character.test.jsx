import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('CharacterDetailsPresentation component', () => {
  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(<Character />);
    expect(asFragment()).toMatchSnapshot();
  });
});
