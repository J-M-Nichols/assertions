/**
 * Asserts that the value is one of the types.
 * 
 * @author Johnathan M. Nichols
 */
const assertTypeOfOne = (value, ...types) => {
    //get the typeof the value
    const valueType = typeof value;

    //check if the valueType is equal to at least one type in types
    const hasType = types.some(el => {
        return valueType === el;
    });

    //if the typeof the value is not within the types, throw an error
    if(!hasType){
        throw new Error(`The given value: ${value} is not a typeof the types: ${types}.`);
    };
};

export default assertTypeOfOne;