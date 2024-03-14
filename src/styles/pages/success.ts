import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,

    h1: {
        fontSize: '$2xl',
        color: '$gray100',
        marginTop: '3rem',
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '1.5rem',
        lineHeight: 1.8,
    },

    a: {
        marginTop: '5rem',
        display: 'block',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300',
        }
    }
})

export const LogoContainer = styled('div', {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const ImagesContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '6.5rem',
})

export const ImageContainer = styled('span', {
    width: '8.125rem',
    maxHeight: '8.125rem',

    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    boxShadow: '-10px 0px 40px 0px rgba(0, 0, 0, 0.5)',

    borderRadius: '100%',
    transform: 'translateX(-3rem)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }
})