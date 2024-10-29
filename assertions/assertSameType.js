/**
 * Asserts that both of the values have the same type.
 * 
 * @author Johnathan M. Nichols
 */
const assertSameType = (valueA, valueB) => {
    //get the type of the values.
    const typeA = typeof valueA;
    const typeB = typeof valueB;

    //if the types are not equal throw an error.
    if(typeA !== typeB){
        throw new Error(`The two given types must be the same type. Found typeA: ${typeA}, typeB: ${typeB}.`);
    };
};

export default assertSameType;