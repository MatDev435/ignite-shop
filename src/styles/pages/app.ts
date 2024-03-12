import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog'

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minHeight: '100vh',
    justifyContent: 'center'
})

export const Header = styled('header', {
    padding: '2rem 8.5rem 2rem 0',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const CartButton = styled('button', {
    borderRadius: 6,
    padding: '0.75rem',
    backgroundColor: '$gray800',
    color: '$gray300',
    border: 0,
    outline: 'none',
    cursor: 'pointer',
})

export const DialogOverlay = styled('div', {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 9,
})

