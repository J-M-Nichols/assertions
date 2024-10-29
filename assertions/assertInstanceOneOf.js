/**
 * Asserts that the value is an instance of one of the classTypes.
 * 
 * @author Johnathan M. Nichols
 */
const assertInstanceOneOf = (value, ...classTypes) => {
    //check if the value is an instance of one of the classTypes
    const hasInsanceOfAClassType = classTypes.some(el => {
        return value instanceof el;
    });

    //if the value is not an instanceof one of the classTypes throw an error
    if(!hasInsanceOfAClassType){
        throw new Error(`The given value was not an instanceOf one of the given classTypes.`);
    };
};

export default assertInstanceOneOf;