
interface propsType {
    placeholder : string,
}

export default function TextInput({ placeholder ,  }: propsType)  {
    return <input placeholder={placeholder}  type="text" style={{
        padding: 10,
        margin : 10,
        borderColor: "black" ,
        borderWidth:1
    }}  />
}