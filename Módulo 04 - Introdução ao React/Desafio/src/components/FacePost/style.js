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

  div &&{
    display: flex;
    flex-direction: column;



    img {

      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .header {

      line-height: 19px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 15px;
      display: flex;
      flex-direction: column;
      align-content: flex-start;

      .teste{
        width: 100%;
        justify-content: flex-start;
        margin-left: 50px;
        margin-top: -42px;

        .header-name {
          font-size: 15px;
          font-weight: bold;
          letter-spacing: -0.3px;
        }

        .date {
          display: flex;
          font-size: 12px;
          color: #8c8989;
          margin-bottom: 20px;
        }
      }
    }

    hr {
      display: flex;
      flex-direction: column;
      border: 0.2px solid #e89;
      width: 600px;
      margin-top: 20px;
      margin-bottom: 10px;
    }
`;
