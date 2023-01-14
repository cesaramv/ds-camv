import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'camv-label',
  styleUrl: 'camv-label.scss',
  shadow: false,
})
export class CamvLabel {
  @Prop() elementId?: string;
  @Prop() classNames = '';
  @Prop() text = 'label';
  @Prop() htmlFor?: string;

  render() {
    return (
      <label
        id={this.elementId}
        htmlFor={this.htmlFor}
        class={`
          ${this.classNames}
        `}
      >
        {this.text}
      </label>
    );
  }
}
