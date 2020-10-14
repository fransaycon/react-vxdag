const pixelizeInteger = (input: number | string) => 
    Number.isInteger(input) ? `${input}px` : input

export default pixelizeInteger
