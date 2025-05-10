import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from 'components/App';

describe('App', () => {
  it('should render', async () => {
    render(<App />);
    expect(await screen.findByText('Iron Hills')).toBeInTheDocument();
  });
});
