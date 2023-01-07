import * as React from 'react'

type ModalHookReturn = [
    boolean,
    () => void
]

export function useModal(isDefaultOpen: boolean): ModalHookReturn {
    const [isOpen, setisOpen] = React.useState(isDefaultOpen)

    const toggle = () => {
        setisOpen(!isOpen)
    };

    return [
        isOpen,
        toggle
    ];
}