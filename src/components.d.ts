/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CamvButton {
        "classNames": string;
        "text": string;
    }
    interface CamvIcon {
        "classNames": string;
        "elementId"?: string;
        "icon": string;
    }
    interface CamvLabel {
        "classNames": string;
        "elementId"?: string;
        "htmlFor"?: string;
        "text": string;
    }
    interface CamvModal {
        "buttons": string;
        "classButon": string;
        "header": string;
        "isopen": boolean;
    }
}
export interface CamvModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCamvModalElement;
}
declare global {
    interface HTMLCamvButtonElement extends Components.CamvButton, HTMLStencilElement {
    }
    var HTMLCamvButtonElement: {
        prototype: HTMLCamvButtonElement;
        new (): HTMLCamvButtonElement;
    };
    interface HTMLCamvIconElement extends Components.CamvIcon, HTMLStencilElement {
    }
    var HTMLCamvIconElement: {
        prototype: HTMLCamvIconElement;
        new (): HTMLCamvIconElement;
    };
    interface HTMLCamvLabelElement extends Components.CamvLabel, HTMLStencilElement {
    }
    var HTMLCamvLabelElement: {
        prototype: HTMLCamvLabelElement;
        new (): HTMLCamvLabelElement;
    };
    interface HTMLCamvModalElement extends Components.CamvModal, HTMLStencilElement {
    }
    var HTMLCamvModalElement: {
        prototype: HTMLCamvModalElement;
        new (): HTMLCamvModalElement;
    };
    interface HTMLElementTagNameMap {
        "camv-button": HTMLCamvButtonElement;
        "camv-icon": HTMLCamvIconElement;
        "camv-label": HTMLCamvLabelElement;
        "camv-modal": HTMLCamvModalElement;
    }
}
declare namespace LocalJSX {
    interface CamvButton {
        "classNames"?: string;
        "text"?: string;
    }
    interface CamvIcon {
        "classNames"?: string;
        "elementId"?: string;
        "icon"?: string;
    }
    interface CamvLabel {
        "classNames"?: string;
        "elementId"?: string;
        "htmlFor"?: string;
        "text"?: string;
    }
    interface CamvModal {
        "buttons"?: string;
        "classButon"?: string;
        "header"?: string;
        "isopen"?: boolean;
        "onAction"?: (event: CamvModalCustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "camv-button": CamvButton;
        "camv-icon": CamvIcon;
        "camv-label": CamvLabel;
        "camv-modal": CamvModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "camv-button": LocalJSX.CamvButton & JSXBase.HTMLAttributes<HTMLCamvButtonElement>;
            "camv-icon": LocalJSX.CamvIcon & JSXBase.HTMLAttributes<HTMLCamvIconElement>;
            "camv-label": LocalJSX.CamvLabel & JSXBase.HTMLAttributes<HTMLCamvLabelElement>;
            "camv-modal": LocalJSX.CamvModal & JSXBase.HTMLAttributes<HTMLCamvModalElement>;
        }
    }
}
