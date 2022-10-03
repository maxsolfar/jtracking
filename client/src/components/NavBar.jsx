import Wraper from "../assets/wrappers/NavBar";
import { FaAlignLeft, FaUserCheck, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import { useState } from "react";

const NavBar = () => {
  const { user, logoutUser, toggleSidebar } = useAppContext();
  const [ showLogout, setShowLogout ] = useState(false);
  return (
    <Wraper>
      <div className="nav-center">
        <button
        className="toggle-btn"
        onClick={toggleSidebar}
        >
          <FaAlignLeft/>
        </button>

        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>

        <div className="btn-container">
          <button className="btn" onClick={() => setShowLogout(!showLogout)}>
            <FaUserCheck />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
            onClick={logoutUser}
            className={"dropdown-btn"}
            >
              logout
            </button>
          </div>
        </div>

      </div>

    </Wraper>
  )
}

export default NavBar;