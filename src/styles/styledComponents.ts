import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
`;

export const Button = styled.button`
  margin: 5px;
`;

export const StyledSelect = styled.select`
  margin: 10px 0;
`;

export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
