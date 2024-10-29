import assertType from "./assertType.js";
import basicTypes from '../basicTypes.js';

/**
 * Asserts that the value is a class.
 * 
 * @author Johnathan M. Nichols
 */
const assertClass = (value) => {
    //assert that the value is a function
    assertType(value, basicTypes.function);

    //assert that the function is is a class function
    if(!/^\s*class\s+/.test(value.toString())){
        throw new Error('The given value must be a class.');
    };
};

export default assertClass;