import styled from '@emotion/styled';

export const ProfileStyle = styled.div`
    background-color: rgb(239, 236, 236);
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 50px;
    padding-bottom: 50px;
`;
export const Description = styled.div`
    background-color:white;
    padding-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 300px;
    border: 1px solid grey;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
`;
export const Name = styled.p`
    font-family: inherit;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
`;

export const Tag = styled.p`
    text-align: center;
    margin-bottom: 10px;
    color: rgb(174, 173, 173);
`;

export const Location = styled.p`
    text-align: center;
    color: rgb(174, 173, 173);
`;

export const Avatar = styled.img`
    display: block;
    width: 150px;
    height: auto;
    border-radius: 50%;
    border: 1px solid black;
    margin: 0 auto 20px auto;
`;

export const StatsStyle = styled.ul`
    display: flex;
    gap: 0;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
`;
export const ItemStyle = styled.li`
    display: flex;
    flex-direction: column;
    flex-basis: calc((100% - 0px) / 3);
    padding: 15px;
    border: 1px solid grey;
`;
export const LabelStyle = styled.span`
    margin-bottom: 5px;
    color: rgb(95, 97, 99);
`;
export const QuantityStyle = styled.span`
    font-weight: 700;
`;

