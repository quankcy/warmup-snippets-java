export interface SearchOption{
    key: string,
    text: string,
    value: string
}

export const searchOptionObject = (name: string): SearchOption => {
    return {key: name, text: name, value: name}
}