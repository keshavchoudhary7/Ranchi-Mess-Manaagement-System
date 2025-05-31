

const blacklistedToken = new Set();


export const addToBlackList = (token) => {
    blacklistedToken.add(token);
}

export const isBlacklisted = (token) => {
    return blacklistedToken.has(token)
}