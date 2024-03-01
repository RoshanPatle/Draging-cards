
import { MdContactPage } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import React from 'react'

function card({data ,reference}) {
  return (
    
      <motion.div drag   className="rounded-[20px]  w-60 h-72 bg-zinc-900/90 text-white p-5 relative overflow-hidden">
      <MdContactPage />
      <p className="mt-5 text-sm font-semibold leading-tight">{data.desc}    </p>
      <div className="absolute bottom-0 left-0 w-full footer ">
        <div className="flex items-center justify-between px-8 py-3 mb-12">
          <h5>{data.filesSize}</h5>
          <span className="flex items-center justify-center bg-gray-600 rounded-full w-7 h-7">
            {data.close?<IoCloseSharp />:<MdDownload />}
          
          </span>
        </div>
        {data.tag.isOpen&& <div className={`absolute bottom-0 left-0 w-full py-3 bg-green-500 tag`}>
          <h3 className="font-semibold text-center">{data.tag.tagTitle}</h3>
          
        </div>
        }
       
      </div>
      </motion.div>
    
  )
}

export default card
