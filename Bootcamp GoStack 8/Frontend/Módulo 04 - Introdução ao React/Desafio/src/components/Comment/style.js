import styled from 'styled-components';

export const Comments = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 10px 0 0px 0;

  .img-avatar {
    display: flex;

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }

  div {
    display: flex;

    .comment {
      padding: 10px 11px 10px 15px;
      background: #f2eded;
      width: 100%
      border-radius: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

      span {
        margin-right: 6px;
        font-weight: bold;
      }
    }
  }
`;
