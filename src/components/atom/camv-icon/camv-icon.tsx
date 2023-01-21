import { Component, Prop, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'camv-icon',
  styleUrl: 'camv-icon.scss',
  assetsDirs: ['assets'],
  shadow: false,
})
export class CamvIcon {
  @Prop() elementId?: string;
  @Prop() classNames = '';
  @Prop() icon: string;

  render() {
    return (
      <span class="camv-icon">
        {/* <i id={this.elementId} class={`camv-icon-${this.icon}`}></i> */}
        <img src={getAssetPath(`./assets/icon-${this.icon}.svg`)} alt={`${this.icon} icon`} />
      </span>
    );
  }
}
