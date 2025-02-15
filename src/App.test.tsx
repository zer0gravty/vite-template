import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders "Hello!" button ', async () => {
    render(<App />);
    const helloBtn = screen.getByRole('button', { name: 'Hello!' });
    expect(helloBtn).toBeVisible();

    await userEvent.click(helloBtn);
    expect(screen.getByText('Hi there!')).toBeVisible();
  });
});
