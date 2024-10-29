import assertArray from './assertArray.js';

/**
 * Asserts that all values of the givenArray have the type of validType.
 * 
 * @author Johnathan M. Nichols
 */
const assertArrayType = (givenArray, validType) => {
    //assert that the givenArray is an array
    assertArray(givenArray);

    //search through the givenArray values and ensure that they have the type validType
    givenArray.forEach((value, index) => {
        //get the type of the value at the index
        const valueType = typeof value;

        //assert that the type of the value at this index has the type validType
        if(validType !== validType){
            throw new Error(`The value: ${value} at index: ${index} does not have the type validType: ${validType}.`);
        };
    });
};

export default assertArrayType;