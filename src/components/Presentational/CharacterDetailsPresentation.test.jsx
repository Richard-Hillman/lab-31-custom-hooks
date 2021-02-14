/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterListPresentation from './CharacterListPresentation';

describe('CharacterDetailsPresentation component', () => {
  afterEach(() => cleanup());
  it('renders CharacterListPresentation', () => {
    const { asFragment } = render(<CharacterListPresentation characters={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
