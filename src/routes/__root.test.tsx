import { renderWithRouter } from '@/lib/test-utils';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { RootComponent } from './__root';

describe('RootComponent', () => {
  test('renders correct navigation links', () => {
    renderWithRouter(<RootComponent />);
    expect(screen.getByRole('link', { name: /home/i })).toBeTruthy();
  });
});
