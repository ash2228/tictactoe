"use client"
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export default function Home() {
  let [player,setPlayer] = useState(undefined);
  const [msg,setMsg] = useState("");
  const [board,setBoard] = useState([]);
  let [sign,setSign] = useState();
  let [turn,setTurn] = useState(false);
  useEffect(()=>{
    player = io("http://localhost:3002/")
    setPlayer(player)
    player.on("sign",(sig)=>{
      setSign(sig);
      if(sig=="X"){
        setTurn(true);
      }
    })
    document.addEventListener("click",(e)=>{
      if(e.target.id && !e.target.innerHTML && turn){
        e.target.innerHTML = sign;
        turn = false;
      }
    })
  },[])
  return (
    <>
    <div className="grid h-[500px] w-[500px] m-auto mt-20 grid-flow-row grid-cols-3">
      <div className="border border-t-0 border-l-0"><div className="absolute h-[167px] w-[167px] text-8xl ml-[50px] mt-[50px]" id="one"></div></div>
      <div className="border border-t-0"><div className="absolute h-[167px] w-[167px] text-8xl ml-[50px] mt-[50px]" id="two"></div></div>
      <div className="border border-t-0 border-r-0"><div className="absolute h-[167px] w-[167px] text-8xl ml-[50px] mt-[50px]" id="three"></div></div>
      <div className="border border-l-0"><div className="absolute h-[167px] w-[167px] text-8xl ml-[50px] mt-[50px]" id="four"></div></div>
      <div className="border"><div className="absolute h-[167px] w-[167px] text-8xl ml-[50px] mt-[50px]" id="five"></div></div>
      <div className="border border-r-0"><div className="absolute h-[167px] w-[167px] text-8xl ml-[50px] mt-[50px]" id="siz"></div></div>
      <div className="border border-b-0 border-l-0"><div className="absolute h-[167px] w-[167px] text-8xl ml-[50px] mt-[50px]" id="seven"></div></div>
      <div className="border border-b-0"><div className="absolute h-[167px] w-[167px] text-8xl ml-[50px] mt-[50px]" id="eight"></div></div>
      <div className="border border-b-0 border-r-0"><div className="absolute h-[167px] w-[167px] text-8xl ml-[50px] mt-[50px]" id="nine"></div></div>
    </div>
    </>
  );
}
