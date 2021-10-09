import styled from 'styled-components';

export const IsOnline = styled.button`
        border-radius: 50%;
        width: 25px;
        height: 25px;
        display: block;
        margin: 10px;
        background-color: ${(online) => online.status === true ? "green" : "red"};
    `;

export default IsOnline;