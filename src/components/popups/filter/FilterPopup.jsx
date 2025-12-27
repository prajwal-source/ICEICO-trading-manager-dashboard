import { Check } from "lucide-react";
import CustomPopup from "../../../utils/CustomPopup";
import { useState } from "react";

const FilterPopup = ({ isOpen, onClose }) => {

  const items = [
    "Number",
    "Full Name",
    "Address",
    "Comment",
    "Email",
    "Exact Match",
  ];
 
  const handleClose=()=>{
  setTimeout(() => {
  onClose()
}, 500);
  }
  // state for all labels
  const [checkedItems, setCheckedItems] = useState(
    items.reduce((acc, item) => {
      acc[item] = false;
      return acc;
    }, {})
  );

  const toggleItem = (item) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const MenuItem = ({ label, checked, onClick }) => (
    <div
      onClick={onClick}
      className="flex items-center justify-between px-3 py-1
        hover:bg-amber-100 hover:border cursor-pointer"
    >
      <span>{label}</span>

      {checked && (
        <span className="text-xs border rounded bg-white text-gray-600 p-0.5">
          <Check size={14} />
        </span>
      )}
    </div>
  );

  return (
    <CustomPopup
      isOpen={isOpen}
      onClose={onClose}
      width="150px"
      position={{ top: 75, right: 130 }}
    >
      <div className="bg-[#f7f5ec] border border-gray-400 shadow-md text-sm p-1">

        {items.map((item) => (
          <MenuItem
            key={item}
            label={item}
            checked={checkedItems[item]}
            onClick={() => {toggleItem(item)
                handleClose();
            }}
          />
        ))}

        {/* EXTRA ACTIONS */}
        <div className="border-t mt-1 pt-1">
          <MenuItem
            label="Select All"
            onClick={() =>
              setCheckedItems(
                items.reduce((acc, i) => {
                  acc[i] = true;
                  return acc;
                }, {})
              )
            }
          />
          <MenuItem
            label="Reset"
            onClick={() =>
              setCheckedItems(
                items.reduce((acc, i) => {
                  acc[i] = false;
                  return acc;
                }, {})
              )
            }
          />
        </div>

      </div>
    </CustomPopup>
  );
};

export default FilterPopup;
