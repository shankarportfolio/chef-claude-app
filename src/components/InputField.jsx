export const InputField = ({onChange, placeHolder, fieldValue}) =>{
    return (
        <input type="text" className={`w-full interfont py-[13px] px-[10px] xl:py-[9px] xl:px-[13px] bg-white rounded-[6px] border border-solid border-[#D1D5DB] [box-shadow:0_1px_2px_0_#0000000D] text-sm leading-[20px] outline-none hover:border-[#141413] focus:border-[#141413] hover:outline-none focus:outline-none`} placeholder={placeHolder} value={fieldValue} onChange={onChange}/>
    )
}