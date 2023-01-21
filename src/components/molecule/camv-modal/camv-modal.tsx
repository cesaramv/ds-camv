import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'camv-modal',
  styleUrl: 'camv-modal.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class CamvModal {
  @Prop({ mutable: true, reflect: true })
  @Prop() isopen: boolean;
  @Prop() header: string;
  @Prop() classButon: string;
  @Prop() buttons: string;

  @State() _buttons: Array<any>;

  // Watch for data
  arrayDataWatcher(buttons) {
    this._buttons = typeof buttons === 'string' ? JSON.parse(buttons) : buttons;
  }

  @Event() private action: EventEmitter;

  // Before the component mounts/loads, we need to convert the buttons string to an array
  componentWillLoad() {
    this.arrayDataWatcher(this.buttons);
  }

  private handleCancel = () => {
    this.isopen = false;
  }

  private handleAction = () => {
    this.action.emit();
  }

  render() {
    return (
      <div class={this.isopen ? 'modal-wrapper is-open' : 'modal-wrapper'}>
        <div class="modal-overlay" onClick={this.handleCancel} />
        <div class="modal">
          <div class="header">
            <h6>{this.header}</h6>
            <div class="close" onClick={this.handleCancel}>
              <camv-icon icon="close"></camv-icon>
            </div>
          </div>
          <div class="body">
            <slot />
          </div>
          <div class="footer">
            {/* <camv-button class-names={this.classButon} text="Confirm"></camv-button>
            <camv-button text="Cancel"></camv-button> */}
            {this._buttons.map((button, index) => (
              <camv-button onClick={index === 0 ? this.handleAction : this.handleCancel} class-names={index === 0 && this.classButon} text={button.text}></camv-button>
            ))}
          </div>
        </div>
      </div>
    );
  }

}
