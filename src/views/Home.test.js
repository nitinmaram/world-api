import Home  from './Home';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';

describe('59892259', () => {
  let originFetch;
  beforeEach(() => {
    originFetch = (global).fetch;
  });
  afterEach(() => {
    (global).fetch = originFetch;
  });
  const mockData = [{
  page: 1,
  pages: 6,
    },[{
        country:{value: 427870270},
        value: 427870270,
        date: "2019"
}]
  ]
  it('should pass', async () => {
    const mockedFetch = ()=>({then:()=>({json:()=>(mockData)})})
    (global).fetch = mockedFetch;
    const { getByTestId } = render(<Home></Home>);
    const div = await waitFor(() => getByTestId('test'));
    expect(div).toHaveTextContent('Population vs GDP ??');
  });
});