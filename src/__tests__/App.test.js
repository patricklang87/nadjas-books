import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const setWidth = (width) => {
  Object.defineProperty(window, 'innerWidth', { configurable: true, writable: true, value: width });
};

describe("Nadja's Books landing page", () => {
  afterEach(() => setWidth(1024));

  it('renders every section the navigation links to', () => {
    setWidth(1024);
    const { container } = render(<App />);
    const links = within(container.querySelector('.navbar')).getAllByRole('link');

    expect(links).toHaveLength(6);
    for (const link of links) {
      const id = link.getAttribute('href').slice(1);
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    }
  });

  it('shows the navigation bar on wide screens', () => {
    setWidth(1024);
    const { container } = render(<App />);
    expect(container.querySelector('.navbar')).toHaveStyle({ top: '0' });
    expect(screen.getByAltText('hamburger icon')).toHaveStyle({ display: 'none' });
  });

  it('uses a hamburger menu on narrow screens', () => {
    setWidth(400);
    const { container } = render(<App />);
    const navbar = container.querySelector('.navbar');
    expect(navbar).toHaveStyle({ top: '-210px' });

    userEvent.click(screen.getByAltText('hamburger icon'));
    expect(navbar).toHaveStyle({ top: '0' });

    userEvent.click(screen.getByRole('link', { name: 'Our Cafe' }));
    expect(navbar).toHaveStyle({ top: '-210px' });
  });

  it('shows a thank-you message after sending the contact form', () => {
    render(<App />);
    userEvent.click(screen.getByRole('button', { name: 'Send' }));
    expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'Send Another' }));
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument();
  });
});
