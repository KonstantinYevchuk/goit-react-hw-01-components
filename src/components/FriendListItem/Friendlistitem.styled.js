import styled from '@emotion/styled';

export const FriendListItemStyled = styled.li`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const Avatar = styled.img`
    margin-right: 10px;
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 700;
`;
export const Status = styled.span`
    width: 15px;
    height: 15px;
    margin-right: 10px;
    border-radius: 50%;

    background-color: ${props => {
     if(props.isOnline) {
        return 'rgb(4, 236, 4)'
     } else {
        return 'rgb(213, 7, 7)'
     }
    }};
`;