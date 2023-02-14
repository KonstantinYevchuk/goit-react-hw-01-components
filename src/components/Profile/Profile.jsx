import PropTypes from 'prop-types';
// import css from '../Profile/Profile.module.css';
import { ProfileStyle, Description, Name, Tag, Location, Avatar, StatsStyle, ItemStyle, LabelStyle, QuantityStyle } from './Profile.styled';
export const Profile = ({username, tag, location, avatar, followers, views, likes}) => {
    return <ProfileStyle>
    <Description>
    <Avatar
     src={avatar}
     alt={avatar}>
    </Avatar>
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
     <Location>{location}</Location>
    </Description>
  
        <StatsStyle> 
            <ItemStyle>
                <LabelStyle>Followers:</LabelStyle>
                <QuantityStyle>{followers}</QuantityStyle>
            </ItemStyle>
            <ItemStyle>
                <LabelStyle>Views:</LabelStyle>
                <QuantityStyle>{views}</QuantityStyle>
            </ItemStyle>
            <ItemStyle>
                <LabelStyle>Likes:</LabelStyle>
                <QuantityStyle>{likes}</QuantityStyle>
            </ItemStyle>
        </StatsStyle>
    </ProfileStyle>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
      })) 
}
