import * as React from 'react'

export type ModalHookProps = {
    isOpen: boolean,
    toggle: () => void
}

export function useModal(): ModalHookProps {
    const [isOpen, setisOpen] = React.useState(false);

    const toggle = () => {
        setisOpen(!isOpen);
    };

    return {
        isOpen,
        toggle
    };
}