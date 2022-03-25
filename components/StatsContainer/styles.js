import styled from "styled-components"

export const Container = styled.div`
  background: var(--light-grey);
  padding: 2rem;

  @media (min-width: 720px) {
    padding: 4rem;

    .statsDescription {
      display: flex;
      justify-content: space-between;

      .codingIcon {
        display: block;
        img {
          width: 5rem;
        }
      }
    }
    .statsContainer {
      display: flex;
      gap: 8rem;
      grid-gap: 8rem;
    }
  }
`

export const StatsDescription = styled.aside`
  margin-bottom: 2rem;

  .codingIcon {
    display: none;
  }

  .statsTitle {
    text-align: center;
    font-size: 1.2rem;

    .hightlight {
      color: var(--primary);
    }
  }

  @media (min-width: 720px) {
    display: flex;
    justify-content: space-between;

    .statsTitle {
      text-align: center;
      font-size: 1.2 rem;

      .hightlight {
        color: var(--primary);
      }
    }

    .codingIcon {
      display: block;
      img {
        width: 5rem;
      }
    }
  }
`

export const ItemsContainer = styled.aside`
  @media (min-width: 720px) {
    display: flex;
    gap: 8rem;
    grid-gap: 8rem;
  }
`
