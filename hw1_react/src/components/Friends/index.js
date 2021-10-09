import React from 'react';
import PropTypes from 'prop-types';
import StylesFriendList from "./StylesFriendList";

const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <div className="friendsWrap">
            <StylesFriendList status={isOnline} />
            <img className="friendsAvatar" src={avatar} alt="avatar" />
            <h3 className="friendsName">{name}</h3>
        </div>
    )
}

export const FriendList = ({ friends }) => {
    const friendJSX = friends.map(({ id, isOnline, avatar, name }) =>
        <FriendListItem key={id} isOnline={isOnline} name={name} avatar={avatar}></FriendListItem>);
    return (<div className='box'>{friendJSX}</div>)

}

FriendList.defaultProps = {
	name: 'Name',
}
FriendList.propTypes = {
	name: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
}