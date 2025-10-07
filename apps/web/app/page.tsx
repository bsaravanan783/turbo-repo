"use client";
import TextInput from "@repo/ui/text-input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div style={{ display:"flex" , height:"100vh" , width:"100vw" , backgroundColor:"black" ,justifyContent:"center" , 
    justifyItems:"center" }}>
      <div style={{ display:"flex" , justifyContent:"center" , flexDirection:'column'}}>
      <TextInput placeholder="room name"  />
        <button onClick={()=> {
          router.push("/room/123")
        }}>Enter room</button>
      </div>
    </div>
  );
}
