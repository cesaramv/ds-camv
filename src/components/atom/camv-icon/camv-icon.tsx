import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'camv-icon',
  styleUrl: 'camv-icon.scss',
  shadow: false,
})
export class CamvIcon {
  @Prop() elementId?: string;
  @Prop() classNames = '';
  @Prop() icon: string;

  render() {
    return (
      <span class="camv-icon">
        <i id={this.elementId} class={`camv-icon-${this.icon}`}></i>
      </span>
    );
  }
}
