import assertArray from './assertArray.js'; 

/**
 * Asserts that all values of the givenArray have a type in validTypes.
 * 
 * @author Johnathan M. Nichols
 */
const assertArrayTypes = (givenArray, ...validTypes) => {
    //assert that the given array is an array
    assertArray(givenArray);

    //loop through each element in givenArray
    givenArray.forEach((value, index)=>{
        //get the typeof this value
        const valueType = typeof value;

        //assert that the valueType is in the array of validTypes
        if(!validTypes.includes(valueType)){
            throw new Error(`In the givenArray: ${givenArray} the value: ${value} at index: ${index} must be a type of validTypes: ${validTypes}.`);
        };
    });
};

export default assertArrayTypes;