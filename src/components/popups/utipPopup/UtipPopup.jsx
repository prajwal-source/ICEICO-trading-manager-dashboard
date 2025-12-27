import { ChevronsRight, Plug } from "lucide-react";
import CustomPopup from "../../../utils/CustomPopup";
import SignInCard from "./SignInCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountInformation from "./AccountInformation";
import ChangePasswordCard from "./ChangePasswordCard";
import OptionsCard from "./OptionsCard";
import LanguagePopup from "./LanguagePopup";
import HelpPopup from "./HelpPopup";
import AboutPopup from "./AboutPopup";
import FeedbackCard from "./FeedbackCard";

const UtipPopup = ({ isOpen, onClose }) => {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [accountInformation, setAccountInformation] = useState(false)
  const [changePassword, setChangePassword] = useState(false);
  const [options, setOptions] = useState(false);
  const [languageCard, setLanguageCard] = useState(false);
  const [helpPopup, setHelpPopup] = useState(false);
  const [aboutPopup, setAboutPopup] = useState(false);
  const [feedbackCard,setFeedbackCard]=useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    if (confirm("Do you want to sign out ?")) {
      navigate("/")
    } else {
      return;
    }
  }
  const handleExit = () => {
    if (confirm("Do you want to Exit ?")) {
      navigate("/")
    } else {
      return;
    }
  }

  return (
    <>
      {/* Popup 1 */}
      <CustomPopup
        isOpen={isOpen}
        onClose={onClose}
        width="220px"
        position={{ top: 41, left: 15 }}
      >
        <div className="bg-[#f7f5ec] border border-gray-400 shadow-md text-sm p-1">

          {/* Sign in */}
          <div
            className="flex justify-between items-center px-3 py-1 cursor-pointer
                       hover:border hover:bg-amber-100"
            onClick={() => {
              onClose();           //  close popup 1
              setOpenSignIn(true); //  open popup 2
            }}
          >
            <span>Sign in</span>
            <Plug size={18} />
          </div>

          <MenuItem label="Sign out" onClick={handleSignOut} />
          <MenuItem label="Account information"
            onClick={() => {
              onClose();
              setAccountInformation(true)
            }} />
          <Divider />

          <MenuItem label="Change password"
            onClick={() => {
              onClose();
              setChangePassword(true);
            }}
          />

          <MenuItem label="Options"
            onClick={() => {
              onClose();
              setOptions(true);
            }}
          />
          <div className="flex justify-between items-center px-3 py-1 hover:border hover:bg-amber-100 cursor-pointer"
            onClick={() => {

              setLanguageCard(true);
            }}
          >
            <span>Language</span>
            <ChevronsRight size={18} />
          </div>

          <Divider />

          <MenuItem label="Help" right="F1"
            onClick={() => {
              onClose();
              setHelpPopup(true);

            }} />
          <MenuItem label="About"
            onClick={() => {
              onClose();
              setAboutPopup(true);
            }}
          />
          <MenuItem label="Feedback"
          onClick={()=>{
            onClose();
            setFeedbackCard(true);
          }}
          />

          <Divider />

          <MenuItem label="Exit" 
          onClick={handleExit}
          />
        </div>
      </CustomPopup>

      {/* Popup 2 */}
      <SignInCard
        isOpen={openSignIn}
        onClose={() => setOpenSignIn(false)}
      />
      {/* Account Information */}
      <AccountInformation
        isOpen={accountInformation}
        onClose={() => setAccountInformation(false)} />
      {/* Change Password  */}
      <ChangePasswordCard
        isOpen={changePassword}
        onClose={() => setChangePassword(false)} />
      {/* Options  */}
      <OptionsCard
        isOpen={options}
        onClose={() => setOptions(false)} />

      {/* Language  */}
      <LanguagePopup
        isOpen={languageCard}
        onClose={() => setLanguageCard(false)}
      />
      {/* Help Popup  */}

      <HelpPopup
        isOpen={helpPopup}
        onClose={() => setHelpPopup(false)}
      />
      {/* About Popup  */}

      <AboutPopup
        isOpen={aboutPopup}
        onClose={() => setAboutPopup(false)}
      />
      {/* Feedback Card  */}
      <FeedbackCard
      isOpen={feedbackCard}
      onClose={()=>setFeedbackCard(false)}/>
    </>
  );
};

const MenuItem = ({ label, right, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center justify-between px-3 py-1
               hover:bg-amber-100 hover:border cursor-pointer"
  >
    <span>{label}</span>
    {right && <span className="text-xs text-gray-600">{right}</span>}
  </div>
);

const Divider = () => (
  <div className="border-t border-gray-300 my-1" />
);

export default UtipPopup;
