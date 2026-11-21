import { render, screen, within, fireEvent } from '@testing-library/react';
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
    const links = within(screen.getByRole('navigation', { name: 'Main' })).getAllByRole('link');

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
    expect(container.querySelector('.navbar')).toHaveStyle({ visibility: 'visible' });
  });

  it('uses a hamburger menu on narrow screens', () => {
    setWidth(400);
    const { container } = render(<App />);
    const navbar = container.querySelector('.navbar');
    expect(navbar).toHaveStyle({ top: '-210px' });

    const menuButton = screen.getByRole('button', { name: 'Open menu' });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(navbar).toHaveStyle({ visibility: 'hidden' }); // closed menu links can't be tabbed to

    userEvent.click(menuButton);
    expect(navbar).toHaveStyle({ top: '0' });

    expect(navbar).toHaveStyle({ visibility: 'visible' });

    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    expect(menuButton).toHaveAccessibleName('Close menu');
    userEvent.tab();
    expect(screen.getByRole('link', { name: "About Nadja's" })).toHaveFocus();

    userEvent.click(screen.getByRole('link', { name: 'Our Cafe' }));
    expect(navbar).toHaveStyle({ top: '-210px', visibility: 'hidden' });
  });

  it('closes the mobile menu with Escape and returns focus to the menu button', () => {
    setWidth(400);
    const { container } = render(<App />);
    const menuButton = screen.getByRole('button', { name: 'Open menu' });
    userEvent.click(menuButton);
    userEvent.tab();
    fireEvent.keyDown(document.activeElement, { key: 'Escape' });
    expect(container.querySelector('.navbar')).toHaveStyle({ visibility: 'hidden' });
    expect(menuButton).toHaveFocus();
  });

  it('shows a thank-you message after sending the contact form', () => {
    render(<App />);
    userEvent.click(screen.getByRole('button', { name: 'Send' }));
    expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'Send Another' }));
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument();
  });
});
