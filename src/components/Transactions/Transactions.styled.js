import styled from '@emotion/styled';

export const TableSlyle = styled.table`
    table-layout: fixed;
    border: 1px solid grey;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
    width: 600px;
    margin: 50px auto 50px auto;

    & > thead {
    background-color: rgb(96, 96, 241);
    }
    & > tbody {
    background-color: white;
    text-align: center;
    }
    tbody:nth-of-type(2n+1) {
    background-color: rgb(195, 194, 194);
    }
    th,
    td {
    padding: 20px;
    }
`;