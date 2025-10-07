import TextInput from "@repo/ui/text-input"
export default function room () {
    return <div style={{
        height:"100vh",
        width:"100vw",
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"column"
    }}>
       <div> room page </div>
        <div>
            <TextInput placeholder="new chat" />
        </div>
    </div>
}