import {  ButtonSize, ButtonState, ButtonType } from "../types/buttons.type";


export interface ButtonConfig {
    type?: ButtonType;
    size?: ButtonSize;
    shape?: boolean;
    state?: ButtonState;
    block?: boolean;
    outline?: boolean;
    submit?: boolean;
}