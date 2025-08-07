// Practical JSX typings for Material Web custom elements used in the app.
// These avoid over‑constraining children (which caused conflicts in React 19)
// while still giving autocomplete for common attributes / events.
import 'react';

type CommonProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    // Allow arbitrary data-* and aria-* already via HTMLAttributes
};

interface MdListItemProps extends CommonProps {
    type?: 'button' | 'submit' | 'reset' | string;
    disabled?: boolean;
    // Headline/supporting text conveniences (Material accepts as attributes)
    headline?: string;
    supportingText?: string;
    trailingSupportingText?: string;
    // Selection / state related
    selected?: boolean;
    activated?: boolean;
    // Navigation roles
    href?: string;
    target?: string;
}

interface MdSliderProps extends CommonProps {
    min?: number | string;
    max?: number | string;
    value?: number | string;
    step?: number | string;
    disabled?: boolean;
    labeled?: boolean;
    ticks?: boolean;
    // Range mode
    range?: boolean;
    valueStart?: number | string;
    valueEnd?: number | string;
    // Event handlers (use onInput for live updates)
    onInput?: (e: InputEvent | React.FormEvent<HTMLElement>) => void;
    onChange?: (e: InputEvent | React.FormEvent<HTMLElement>) => void;
}

interface MdOutlinedButtonProps extends CommonProps {
    disabled?: boolean;
    href?: string;
    target?: string;
    type?: 'button' | 'submit' | 'reset';
}

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'md-list': CommonProps;
            'md-list-item': MdListItemProps;
            'md-slider': MdSliderProps;
            'md-outlined-button': MdOutlinedButtonProps;
        }
    }
}

export { };
