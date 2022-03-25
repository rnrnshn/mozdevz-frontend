import styled from "styled-components"

export const ProgramsPage = styled.div`
  .programsContainer {
    padding: 2rem;
  }

  .programsDescription {
  }

  .programsSection {
    margin-bottom: 2rem;
  }

  .programsTitle {
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
  }

  .programsText {
    font-size: 0.8rem;
  }

  .programsSubTitle {
    font-size: 1.2rem;
  }

  .programsText {
    font-size: 0.8rem;
  }

  /* Program Item */
  .programsItems {
  }

  .programsItem {
    padding: 2rem;
    border: 1px solid var(--primary);
    margin-bottom: 1.5rem;
  }

  .programsIcon {
    margin-bottom: 1rem;
  }

  .programsImage {
    width: 80px;
  }

  .programsItemText {
  }

  .programsItemTitle {
    font-size: 1.2rem;
    line-height: 1.7;
  }

  .programsItemDescription {
    font-size: 0.8rem;
  }

  @media (min-width: 720px) {
    .programsContainer {
      display: flex;
      gap: 4rem;
      padding: 4rem;
    }

    .programsSection {
      margin-bottom: 8rem;
    }

    .programsTitle {
      width: 15ch;
      font-size: 2.5rem;
      margin-bottom: 0.6rem;
    }

    .programsText {
      width: 45ch;
    }

    .programsSubTitle {
      width: 18ch;
      font-size: 1.5rem;
      color: var(--primary);
    }

    /* Programs Item */
    .programsItem {
      display: flex;
      gap: 2rem;
      align-items: flex-start;
    }

    .programsIcon {
      margin-top: 1rem;
      margin-bottom: unset;
    }

    .programsItemTitle {
      font-size: 1.8rem;
    }
  }
`
