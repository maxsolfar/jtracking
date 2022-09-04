import styled from 'styled-components'

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .error-img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  .error-text {
    margin-top: 0;
    margin-bottom: 1.5rem;
    color: var(--grey-500);
    font-size: 1.8rem;
  }
  .error-link {
    color: var(--grey-900);
    text-decoration: underline;
    text-transform: capitalize;
    font-size: 1.6rem;
  }
`

export default Wrapper
