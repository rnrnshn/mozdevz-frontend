import styled from "styled-components"

export const Container = styled.aside`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  @media (min-width: 720px) {
    display: block;
  }
  .statsNumber {
    font-size: 3rem;

    @media (min-width: 720px) {
      display: block;
      font-size: 4.6rem;
      margin-bottom: 1rem;
    }
  }
  .bar {
    display: block;
    background-color: var(--primary);
    height: 0.3rem;
  }
  .statsText {
    font-size: 0.6rem;
    @media (min-width: 720px) {
      font-size: 0.8rem;
    }
  }
`
