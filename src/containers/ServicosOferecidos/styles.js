import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  padding: 10px 165px 20px 165px;
  margin: 1.5em auto 1.5em auto;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto 2.5em auto;
    max-width: 100%;
  }

  .frases {
    flex-direction: column;
    padding: 10px 85px 20px 85px;
  }

  .frases p {
    text-align: justify;
    font: 400 18px "Inconsolata", sans-serif;
  }

  .face{
    float: right;
    border: transparent thin solid;
    padding: 5px;
    margin: 0px 10px 10px 0;
    max-width: 486px;
  }

  .face2{
    float: left;
    border: transparent thin solid;
    padding: 5px;
    margin: 0px 10px 10px 0;
    max-width: 586px;
  }


`;