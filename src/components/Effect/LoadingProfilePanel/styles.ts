import styled from 'styled-components';

export const Container = styled.div`
  > div {
    width: 260px;
    height: 300px;
    .bg-skeleton {
      width: 100%;
      height: 100px;

      filter: brightness(96%);
    }

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 175px;

      .avatar-skeleton {
        z-index: 1;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: -50px 0 12px;
      }

      .row-skeleton {
        height: 12px;

        &:nth-child(2) {
          width: 60%;
        }

        &:nth-child(3) {
          width: 50%;
          margin-top: 10px;
        }
      }
    }
  }
`;
