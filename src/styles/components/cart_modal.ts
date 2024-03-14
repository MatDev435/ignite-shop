import { styled } from ".."
import * as Dialog from '@radix-ui/react-dialog'

export const CartButton = styled('button', {
    position: 'relative',
    borderRadius: 6,
    padding: '0.75rem',
    backgroundColor: '$gray800',
    color: '$gray300',
    border: 0,
    outline: 'none',
    cursor: 'pointer',

    span: {
        position: 'absolute',
        top: '-0.25rem',
        right: '-0.25rem',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        color: '$gray100',
        fontSize: '0.875rem',
        backgroundColor: '$green300',
        width: '1.5rem',
        height: '1.5rem',
        borderRadius: '100%'
    }
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


export const DialogContent = styled(Dialog.Content, {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    maxWidth: 480,
    height: '100%',
    backgroundColor: '$gray800',
    boxShadow: '-10px 0px 20px 0px rgba(0, 0, 0, 0.75)',
    padding: '4.5rem 3rem 3rem 3rem',
    display: 'grid',
    gridTemplateRows: 'auto 1fr 1fr',

    h1: {
        fontWeight: 'bold',
        color: '$gray100',
        fontSize: '$lg',
        marginBottom: '2rem',
    },

    footer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',

        alignSelf: 'end',

        '& span:nth-child(2), & strong:nth-child(4)': {
            textAlign: 'right',
        },

        span: {
            color: '$gray300',
            fontSize: '$sm',
            marginBottom: '0.437rem',
        },

        strong: {
            color: '$gray100',
            fontSize: '$md',
        },

        button: {
            gridColumn: 'span 2',
            marginTop: '3.5rem',
            borderRadius: 8,
            backgroundColor: '$green500',
            color: '$white',
            fontWeight: 'bold',
            fontSize: '$md',
            padding: '1.25rem 0',
            cursor: 'pointer',

            '&:disabled': {
                opacity: 0.6,
                cursor: 'not-allowed',
            },

            '&:not(:disabled):hover': {
                backgroundColor: '$green300'
            },
        }
    },
})

export const CloseDialog = styled(Dialog.Close, {
    position: 'absolute',
    right: '1.5rem',
    top: '1.5rem',
    background: 'transparent',
    color: '$gray300',
    cursor: 'pointer',
    border: 0,
    marginBottom: '1.5rem',

    '&:hover': {
        color: '$gray100'
    }
})

export const ItemsContainer = styled('div', {
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'column',
    gap: '2rem',
    marginBottom: '1.25rem',
    overflow: 'auto',
})

export const Item = styled('div', {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '1.25rem',
})

export const ItemImageContainer = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    width: '6.3rem',
    height: '5.68rem',
    borderRadius: 8,

    img: {
        objectFit: 'cover',
    },
})

export const ItemInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    
    span: {
        fontSize: '$md',
        color: '$gray300',
    },

    strong: {
        fontSize: '$md',
        color: '$gray100',
        marginTop: '0.125rem',
    },

    button: {
        fontSize: '$md',
        color: '$gray300',
        border: 0,
        textAlign: 'left',
        background: 'transparent',
        marginTop: '0.5rem',
        cursor: 'pointer',
    },
})