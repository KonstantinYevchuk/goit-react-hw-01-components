import PropTypes from 'prop-types';
import css from 'components/FriendListItem/Friendlistitem.module.css';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={css.item}>
        <span className="status">{isOnline}</span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}
