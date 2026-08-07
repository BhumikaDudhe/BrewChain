"use client";

import { useEffect, useState } from "react";
import { formatEther } from "ethers";
import { getTips } from "../lib/getTips";
import "../styles/supporterWall.css";

export default function SupporterWall() {

  const [tips, setTips] = useState([]);


  async function loadTips(){

    try{

      const data = await getTips();

      setTips(
        [...data]
          .reverse()
          .slice(0,3)
      );

    }
    catch(err){

      console.log(err);

    }

  }



  useEffect(()=>{

    loadTips();


    window.addEventListener(
      "tip-success",
      loadTips
    );


    return ()=>{

      window.removeEventListener(
        "tip-success",
        loadTips
      );

    };

  },[]);



  function shorten(wallet){

    if(!wallet) return "";

    return (
      wallet.slice(0,6)
      +
      "..."
      +
      wallet.slice(-4)
    );

  }



return (

<section className="support-section">


<div className="support-header">

<h2>
☕ Latest Supporters
</h2>

<p>
People who supported the creator
</p>

</div>



{
tips.length===0 ?


<div className="empty-support">

<h3>
No coffees yet ☕
</h3>

<p>
Be the first supporter!
</p>

</div>


:

<div className="support-grid">


{
tips.map((tip,index)=>(


<div 
className="support-card"
key={index}
>


<div className="support-user">


<div className="avatar">

{
tip.sender?.slice(2,3).toUpperCase()
}

</div>



<div>

<h4>
Supporter
</h4>

<span>
{shorten(tip.sender)}
</span>

</div>


</div>




<div className="amount">

☕ 
{formatEther(tip.amount)}
ETH

</div>




{
tip.note &&

<p className="message">

"{tip.note}"

</p>

}



</div>


))
}


</div>


}



</section>


);


}