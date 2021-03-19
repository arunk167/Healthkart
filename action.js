import types from './types'
export const onAdd=(obj)=>({
    type:types.ADD,
    payload:{obj}
})
export const onDelete=(id)=>({
    type:types.DELETE,
    payload:{id}
})
export const onUpdate=(id,updatedtext,status)=>({
    type:types.UPDATE,
    payload:{id,updatedtext,status}
})