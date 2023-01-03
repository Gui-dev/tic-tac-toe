import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    text-align: center;
    color: #FFF;
    margin-bottom: 10px;
  }

  .board-game {
    width: 400px;
    height: 400px;
    background: #333;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    span {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      color: #FFF;
      padding: 0;
      width: 33.33333%;
      max-width: 33.33333%;
      outline: 1px solid #111;

      &:hover {
        background: #222;
        cursor: pointer;
      }

      &::after {
        content: '';
        display: none;
        width: 180%;
        height: 10px;
        background: black;
        position: absolute;
        z-index: 100;
      }

      &.horizontal {
        &::after {
          display: block;
        }
      }
      &.vertical {
        &::after {
          display: block;
          rotate: 90deg;
        }
      }
      &.diagonal-1 {
        &::after {
          display: block;
          rotate: 45deg;
        }
      }
      &.diagonal-2 {
        &::after {
          display: block;
          rotate: 135deg;
        }
      }

      abbr {
        font-size: 20px;
        color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 10px;
        left: 10px;
      }
  }
}
`
