import { Plug, X } from "lucide-react";
import CustomPopup from "../../../utils/CustomPopup";
import { useState } from "react";

export default function LanguagePopup({ isOpen, onClose }) {
    const [show, setShow] = useState();
    return (

        <CustomPopup
            isOpen={isOpen}
            onClose={onClose}
            width="100px"
            position={{ top: 197, left: 235 }}

            backdrop={true}
        >
            <div className="w-[200px] border border-gray-400 bg-[#f3f1e3] rounded shadow-md text-sm font-sans">

                {/* Title bar */}
                <div className="flex popup-header items-center justify-between border border-black bg-amber-100 p-1 border-b"
                onClick={()=>onClose()}>
                    <div className="flex items-center pl-15 gap-2 font-medium">
                        
                        <span>English</span>
                    </div>
                  
                </div>
                
            </div>
        </CustomPopup>
    );
}
