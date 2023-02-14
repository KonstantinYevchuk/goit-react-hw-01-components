import styled from '@emotion/styled';

export const Section = styled.section`
    width: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
    margin: 0 auto;
`;

export const Title = styled.h2`
    margin: 0 auto;
    padding: 30px 0;
    width: 100%;
    background-color: white;
`;

export const List = styled.ul`
    display: flex;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;
export const Item = styled.li`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-basis: calc((100% - 0px) / 5);
    padding: 15px;
    border: 1px solid gray;
    color: white;
`;
export const Label = styled.span`
    margin-bottom: 5px;
`;
export const Percent = styled.span`
    font-size: 20px;
`;