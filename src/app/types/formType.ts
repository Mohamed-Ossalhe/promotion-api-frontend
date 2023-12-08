export type formType = {
    method: string,
    formInputs: Array<
        {
            type: string,
            name: string,
            id: string,
            label: string,
            value: string | number
        }
    >,
    options?: {headers: object} | Array<object>
}