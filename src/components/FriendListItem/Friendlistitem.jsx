import PropTypes from 'prop-types';
// import css from 'components/FriendListItem/Friendlistitem.module.css';
import { FriendListItemStyled, Avatar, Status, Name } from './Friendlistitem.styled';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <FriendListItemStyled> 
        <Status isOnline={isOnline}>{isOnline}</Status>
        <Avatar src={avatar} alt={name} width="48"></Avatar>
        <Name>{name}</Name>
        </FriendListItemStyled>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}
