import { newSpecPage } from '@stencil/core/testing';
import { CamvModal } from '../camv-modal';

describe('camv-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CamvModal],
      html: `<camv-modal></camv-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <camv-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </camv-modal>
    `);
  });
});
