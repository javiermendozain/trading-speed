export const getUnique = (array = [], value = "") => {

    if (array.includes(value)) {
        return array.filter(item => item !== value)
    }

    return [...new Set([...array, value])]
}

export const isFavorite = (array = [], symbol) => array.includes(symbol)
