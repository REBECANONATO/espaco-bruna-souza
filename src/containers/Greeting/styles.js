import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  padding: 20px 10px;
  margin: 1.5em auto 5.5em auto;

  @media (max-width: 768px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

export const GrettingTextDiv = styled.div`
  display: flex;
  margin-top: 5em;
  flex-direction: column;
  width: 55%;
  a {
    text-decoration: none;
  
    h1 {
      font-size: 45px;
      color: #5C5C5C;
      transition: color 0.4s;
      &:hover {
        color: ${shade(0.3, '#BA68C8')};
      }
    }
  }
  p {
    color: #5C5C5C;
    font-size: 22px;
    margin: 10px 0;
  }
  span {
    font-size: 22px;
    margin: 10px 0;
    font-style: italic;
    color:#BA68C8;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const GrettingImgDiv = styled.div`
  width: 46%;
  img {
    max-width: 95%;
    height: auto;
    top: 70px;
    right: 0;
    border: 0.8;
    transform: rotate(10deg);
  }
  @media (max-width: 768px) {
    width: 90%;
    img {
      max-width: 100%;
    }
  }
`;

export const GrettingButtonDiv = styled.div`
  .button {
      width: 50%;
      height: 60px;
      background-color: #BA68C8;
      border: 0;
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      margin-top: 16px;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      font-size: 18px;
      line-height: 60px;
      transition: filter 0.2s;
  }

  .button:hover {
    filter: brightness(90%);
  }
`;