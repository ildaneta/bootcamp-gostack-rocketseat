import styled from 'styled-components';

export const Post = styled.div`
  margin: 0 auto;
  background: #fcf7f7;
  width: 650px;
  height: 100%;
  margin-top: 25px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  div & {
    display: flex;
    flex-direction: column;

    .header {
      line-height: 19px;

      display: flex;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }

      .header-name-date {
        display: flex;
        flex-direction: column;

        .header-name {
          font-size: 15px;
          font-weight: bold;
          letter-spacing: -0.3px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 15px;
        }

        .date {
          display: flex;
          font-size: 12px;
          color: #8c8989;
          margin-bottom: 20px;
        }
      }
    }

    p {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 15px;
    }

    hr {
      display: flex;
      flex-direction: column;
      border: 0.2px solid #e89;
      width: 600px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;
