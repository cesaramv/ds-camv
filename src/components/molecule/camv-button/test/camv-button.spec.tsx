import { newSpecPage } from '@stencil/core/testing';
import { CamvButton } from '../camv-button';

describe('camv-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CamvButton],
      html: `<camv-button></camv-button>`,
    });
    expect(page.root).toEqualHtml(`
      <camv-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </camv-button>
    `);
  });
});
