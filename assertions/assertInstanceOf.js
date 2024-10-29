/**
 * Asserts that the value is an instance of the classType.
 * 
 * @author Johnathan M. Nichols
 */
const assertInstanceOf = (value, classType) => {
    //asserts that the value is an instance of the classType
    if(!(value instanceof classType)){
        throw new Error(`The given value must be an instanceOf ${classType.name}`);
    };
};

export default assertInstanceOf;