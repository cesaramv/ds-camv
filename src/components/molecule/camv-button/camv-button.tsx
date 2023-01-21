import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'camv-button',
  styleUrl: 'camv-button.css',
  shadow: true,
})
export class CamvButton {
  @Prop() text: string;
  @Prop() classNames: string;
  render() {
    return (
      <button class={`btn ${this.classNames}`} type="button">
        
        {this.text}
      </button>
    );
  }

}
