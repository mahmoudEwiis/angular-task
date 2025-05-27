import { ButtonShape, ButtonSize, ButtonState, ButtonType } from "../types/buttons";


export interface ButtonConfig {
    type?: ButtonType;
    size?: ButtonSize;
    shape?: ButtonShape;
    state?: ButtonState;
    block?: boolean;
    outline?: boolean;
    submit?: boolean;
}