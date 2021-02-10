import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterListPresentation from './CharacterListPresentation';

describe('CharacterListPresentation component', () => {
  afterEach(() => cleanup());
  it('renders CharacterListPresentation', () => {
    const { asFragment } = render(<CharacterListPresentation />);
    expect(asFragment()).toMatchSnapshot();
  });
});
