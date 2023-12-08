export type formType = {
    method: string,
    formInputs: Array<
        {
            type: string,
            name: string,
            id: string,
            label: string
        }
    >,
    options?: {headers: object} | Array<object>
}