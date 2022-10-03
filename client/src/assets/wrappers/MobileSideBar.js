import styled from 'styled-components';

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    font-size: 1.6rem;
    font-weight: 500;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 180px;
    border-bottom: 1px solid rgba(21,21,21,.1);
    padding-bottom: 10px;
  }
  .content {
    background: var(--clear-color);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 5rem 3rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 3rem;
    color: var(--primary-500);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-500);
    padding: 2.2rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .nav-link:hover .icon {
    color: var(--primary-500);
  }
  .icon {
    font-size: 2.4rem;
    margin-right: 1.6rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    color: var(--primary-500);
  }
  .active .icon {
    color: var(--primary-500);
  }
`
export default Wrapper;