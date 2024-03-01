import React, {useState} from "react";
import Card from "./card";

function foreGround() {
  
  
  const data=[
    {
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, optio!',
      filesSize:'.9mb',
      close:false,
      tag:{isOpen:true, tagTitle:'Download Now', tagColor:'green'},
    },


    {
      desc:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, optio!',
      filesSize:'10mb',
      close:true,
      tag:{isOpen:true, tagTitle:'Download Now', tagColor:'green'},
    },

    {
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, optio!',
      filesSize:'.5mb',
      close:false,
      tag:{isOpen:false, tagTitle:'Download Now', tagColor:'green'},
    },
  ];
  
  return (
    
      <div  className="fixed top-0 left-0 flex flex-wrap w-full h-full gap-3 p-10 z-5">
{
  data.map((item, index)=>(
<Card  data={item} />
    
  ))
}
        
      </div>
    
  );
}

export default foreGround;
