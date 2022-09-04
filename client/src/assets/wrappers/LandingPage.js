import styled from 'styled-components'

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo{
    width: 50%;
    margin-top: 5rem;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    justify-items: center;
  }
  .info{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
    text-align: center;
    margin: 2rem 0;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 6rem;
    }
    .main-img {
      display: block;
    }
    .logo {
      width: 20%;
    }
    .info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    }
    p{
      text-align: left;
    }
  }
`
export default Wrapper
