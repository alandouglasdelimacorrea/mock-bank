export class TransferOperationError extends Error {

    private field: string

    constructor(message: string, field: string){
        super(message)

        this.name = "TransferOperationError"
        this.field = field
    }
}