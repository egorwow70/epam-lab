module.exports = class StringTransformer {
    static increaseFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1);
    } 
}