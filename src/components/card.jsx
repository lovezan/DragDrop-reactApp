/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import {motion} from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
function Card({data,reference}) {
    
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={5} className="relative w-60 h-80 flex-shrink-0 rounded-[40px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden">
        {/* icon */}
        <FaFileLines />  
        {/* text */}
        <p className="text-sm mt-5 font-semibolt leading-tight">
         {data.desc}
        </p>
        <div className="footer absolute bottom-0 w-full  left-0 ">
        <div className="flex items-center justify-between px-8 mb-3">
            <h4>{data.filesize}</h4>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {
              data.close?<IoCloseCircleOutline />:<MdOutlineFileDownload size=".8em" color="#fff" />

            }

            
            </span>
        </div>
        {
          data.tag.isOpen && (
            
            <div className={`tag w-full py-4 ${data.tag.tagColor==="blue"? "bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
        <h3 className="text-sm font-semibold">{data.tag.tagtitle}</h3>
        </div>
          
          )
        }
       
        </div>

      
      </motion.div>
    </>
  );
}

export default Card;
