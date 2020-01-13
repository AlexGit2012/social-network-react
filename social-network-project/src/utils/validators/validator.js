export const requiredField = value => {
    if (value) return undefined
    return "Error, field can't be empty"
}

export const maxLength30 = value => {
    if (value.length>30) return "Error, too long text value"
    return undefined
}

export const maxLengthCreator = maxLength => value => {
    if (value.length>maxLength) return `Error, max length is ${maxLength} symbols`
    return undefined
}