import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--clear-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: var(--transition);
      font-size: 1.6rem;
      font-weight: 500;
    }
    .logo {
      display: flex;
      align-items: center;
      width: 150px;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--backgroundColor);
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--grey-500);
      padding: 1.6rem 0;
      width: 50%;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      background: var(--grey-50);
      padding-left: 4rem;
      color: var(--primary-500);
      width: 100%;
    }
    .nav-link:hover .icon {
      color: var(--primary-500);
    }
    .icon {
      font-size: 3.4rem;
      margin-right: 2.6rem;
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
  }
`;
export default Wrapper;
