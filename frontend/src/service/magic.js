import { Magic } from 'magic-sdk';


const magic = new Magic('pk_live_3F6ACC147EA0C5C2');


export const checkUser = async (cb) => {
    const isLoggedIn = await magic.user.isLoggedIn();
    if (isLoggedIn) {
        const user = await magic.user.getMetadata()
        return cb({ isLoggedIn: true, email: user.email })
    }
    return cb({ isLoggedIn: false})
}

export const loginUser = async (email) => {
    await magic.auth.loginWithMagicLink({ email })
}

export const logoutUser = async () => {
    await magic.user.logout()
}

export default Magic