export const deposit = amount => {
    return {
        type: 'DEPOSIT',
        payload: amount,
    }
}

export const widthdraw = amount => {
    return {
        type: 'WITHDRAW',
        payload: amount,
    }
}

export const collectInterest = () => {
    return {
        type: 'COLLECT_INTEREST',
    }
}

export const deleteAccount = () => {
    return {
        type: 'DELETE_ACCOUNT',
    }
}

export const toggleAccount = () => {
    return {
        type: 'TOGGLE',
    }
}