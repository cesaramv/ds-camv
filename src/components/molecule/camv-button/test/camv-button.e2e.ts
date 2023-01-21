import { newE2EPage } from '@stencil/core/testing';

describe('camv-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<camv-button></camv-button>');

    const element = await page.find('camv-button');
    expect(element).toHaveClass('hydrated');
  });
});
