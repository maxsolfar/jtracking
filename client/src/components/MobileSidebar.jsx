import Wrapper from "../assets/wrappers/MobileSideBar";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import { FaTimes } from "react-icons/fa";
import NavLinks from './NavLinks'

const SideBar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <section className={ showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className="content">
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo/>
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </section>
    </Wrapper>
  )
}

export default SideBar;