/**
 * Asserts that the typeof the value is the given type.
 * 
 * @author Johnathan M. Nichols
 */
const assertType = (value, type) => {
    if(typeof value !== type){
        throw new Error(`The given value must be of type: ${type}.`);
    };
};

export default assertType;