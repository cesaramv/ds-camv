import { Component, Prop, h, getAssetPath } from '@stencil/core';
import lottie from 'lottie-web';

@Component({
  tag: 'camv-loading',
  styleUrl: 'camv-loading.scss',
  shadow: false,
  assetsDirs: ['./assets']
})
export class CamvLoading {
  loaded = false;
  show = false;
  @Prop() isopen: boolean;

  componentDidLoad(){
    lottie.loadAnimation({
      container: document.querySelector('.spinner'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: getAssetPath('./assets/lottie/loading-circle.json')
    });
    this.loaded = true;
  }

  render() {
    return (
      <div class={this.isopen ? 'camv-loading isopen': 'camv-loading'}>
        <div class="camv-loading__overlay"></div>
        <div class="spinner"></div>
      </div>
    );
  }
}
