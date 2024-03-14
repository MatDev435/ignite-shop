import { styled } from "..";

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

