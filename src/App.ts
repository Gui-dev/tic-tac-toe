import styled from 'styled-components'

export const Container = styled.div`
  .board-game {
    width: 400px;
    height: 400px;
    background: white;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    span {
      width: 33.33333%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
      font-size: 30px;
      position: relative;
      outline: 1px solid #ccc;

      &:hover {
        background: #f6f6f6;
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
