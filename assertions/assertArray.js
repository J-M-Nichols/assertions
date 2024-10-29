/**
 * Asserts that the value is an array.
 * 
 * @author Johnathan M. Nichols
 */
const assertArray = (value) => {
    if(!Array.isArray(value)){
        throw new Error('The given value must be an array.');
    };
};

export default assertArray;