import { newE2EPage } from '@stencil/core/testing';

describe('camv-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<camv-modal></camv-modal>');

    const element = await page.find('camv-modal');
    expect(element).toHaveClass('hydrated');
  });
});
