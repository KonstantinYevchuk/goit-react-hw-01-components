import PropTypes from 'prop-types';
import css from 'components/Friendlist/Friendlist.module.css';
import { FriendListItem } from 'components/FriendListItem/Friendlistitem';

export const FriendList = ({friends}) => {

    return <ul className={css["friend-list"]}>
        {friends.map(({id, name, avatar, isOnline}) => 
        <FriendListItem 
        key={id} 
        name={name} 
        avatar={avatar} 
        isOnline={isOnline} /> 
        )}
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }).isRequired).isRequired
}

