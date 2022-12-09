
export default class Exception extends Error{
    constructor(codError, message) {
        super(message);
        this.codError = codError;
        this.name = "Exception";
    }
}