import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }

  div {
    display: flex;
    align-items: center;

    svg {
      padding-right: 5px;
    }
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  ul {
    margin-bottom: 10px;
    margin-left: -80px;

    li {
      display: flex;
      align-items: center;
      padding: 10px 10px;
      border: 1px solid #eee;
      border-radius: 4px;

      & + li {
        margin-top: 10px;
      }

      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid #eee;
      }

      div {
        flex: 1;
        margin-left: 15px;

        strong {
          font-size: 16px;

          a {
            text-decoration: none;
            color: #555;
            line-height: 23.5px;

            &:hover {
              color: #f78080;
            }
          }

          span {
            background: #d87b7b;
            color: #fff;
            border-radius: 2px;
            font-size: 12px;
            font-weight: 600;
            height: 20px;
            padding: 3px 4px;
            margin-left: 10px;
          }
        }

        p {
          margin-top: 5px;
          font-size: 12px;
          color: #555;
        }
      }
    }
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;

  button {
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    margin: 0 0.25rem;
    color: #fff;
    background: #f78080;
    font-weight: bold;

    &:nth-child(${props => props.active + 1}) {
      opacity: 0.6;
      color: #fff;
    }
  }
`;

export const PageAction = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;

  button {
    transition: opacity 0.25s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    outline: 0;
    border: 0;
    padding: 8px;
    margin: 0 0.25rem;
    color: #fff;
    background: #f78080;
    font-weight: bold;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`;
