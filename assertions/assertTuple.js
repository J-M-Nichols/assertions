import assertSameType from './assertSameType.js';
import assertArray from './assertArray.js';

/**
 * Asserts that the compareValue has the same length and type as the tuple.
 * 
 * @author Johnathan M. Nichols
 */
const assertTuple = (compareValue, tuple) => {
    //assert the compareValue is an array.
    assertArray(compareValue);

    //assert the compareValue and the tuple are the same length.
    if(compareValue.length !== tuple.length){
        throw new Error('The compareValue must have the same length of the tuple.');
    };

    //ensure the tuples have the same types at the indexes.
    compareValue.forEach((value, index)=>{
        assertSameType(value, tuple[index]);
    });
};

export default assertTuple;