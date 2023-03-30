import { Component, Prop, h, getAssetPath } from '@stencil/core';
//import { iconsList } from '../../../utils/icons-list';

@Component({
  tag: 'camv-icon',
  styleUrl: 'camv-icon.scss',
  assetsDirs: ['assets'],
  shadow: false,
})
export class CamvIcon {
  @Prop() elementId?: string;
  @Prop() classNames = '';
  @Prop() icon!: string;

  render() {
    return (
      <span class="camv-icon">
        {/* <i id={this.elementId} class={`camv-icon-${this.icon}`}></i> */}
        {/* <svg class="img-icon" xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" viewBox="0 0 21 21">
          <path fill-rule="evenodd" d={iconsList[`${this.icon}`]} />
        </svg> */}
        <img src={getAssetPath(`./assets/icon-${this.icon}.svg`)} alt={`${this.icon} icon`} />
      </span>
    );
  }
}
