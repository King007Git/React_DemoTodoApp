export const addition = (num)=>{
    return {
        type:"add",
        payload:num
    }
}
export const remove = (num)=>{
    return {
        type:"remove",
        payload:num
    }
}