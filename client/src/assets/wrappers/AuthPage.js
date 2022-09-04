import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .divider-top {
    width: 100%;
    height: 150px;
    position: absolute;
    top: -120px;
    left: 0;
    background-color: var(--primary-500);
  }
  .logo {
    width: 70%;
    padding: 2rem 1rem;
  }
  h3{
    color: var(--clear-color);
    font-size: 1.8rem;
  }
  .title-form{
    width: 50%;
    background-color: var(--primary-500);
    position: absolute;
    right: 0;
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 0px 0px 2.5rem;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    max-width: 420px;
    border-bottom: 5px solid var(--primary-500);
    position: relative;
    z-index: 2;
    overflow: hidden;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    font-size: 1.8rem;
    font-weight: 700;
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }

  @media (min-width: 992px) {
    .logo {
      width: 55%;
    }
  }
`
export default Wrapper
