class ApiPesponse {
    constructor(successCode,  data,message="success") {
        this.successCode= statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode <=400;
    }
}