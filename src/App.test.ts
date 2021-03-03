import {render} from '@testing-library/svelte';
import {expect} from 'chai';
import App from './App.svelte';

/* --> NOT CURRENT
describe('<App>', () => {
  it('renders the home page', () => {
    const {getByText} = render(App);
    const linkElement = getByText(/learn svelte/i);
    expect(document.body.contains(linkElement));
  });
});

 */
