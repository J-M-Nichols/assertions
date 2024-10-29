//typical image extensions supported by Chrome, Edge, Firefox, Safari, and Opera for the img tag
const validImageExtensions = ['apng', 'bmp', 'gif', 'jpeg', 'jpg', 'png', 'webp', 'svg',];

/**
 * Asserts that the imageUrl has a valid extension supported by Chrome, Edge, Firefox, Safari, and Opera for the img tag
 * 
 * @author Johnathan M. Nichols
 */
const assertImage = imageUrl => {
    //get the extension
    const extension = imageUrl.split('.').pop().toLowerCase();
    
    //assert that the extension is a valid image extension
    if(!validImageExtensions.includes(extension)){
        throw new Error(`The given imageUrl is not a valid image: ${validImageExtensions}`);
    }
};

export default assertImage;