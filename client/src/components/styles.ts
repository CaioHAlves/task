import styled from 'styled-components'

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  border: 0.0625rem dashed #FFFFFF;
  margin: 1rem 0 0 0;
  width: 20rem;
  overflow: auto;
  height: 12.5rem;

  li {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0 1rem;
    border-bottom: 0.0625rem solid #FFFFFF;
  }

  li:last-child {
    border-bottom: none;
  }

  .infinite-scroll {
    width: 100%;
  }
`