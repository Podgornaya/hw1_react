 import React from 'react'
 import PropTypes from 'prop-types';

const Avatar=({image})=>{
    return(
        <img
      src={image}
      alt="Аватар пользователя"
      className="Avatar"
    />
    )
}

const Name=({name})=>{
    return (<p className="Name">{name}</p>)
}

const Tag=({tag})=>{
    return (<p className="Tag">@{tag}</p>)
}

const Location=({location})=>{
    return (<p className="Location">{location}</p>)
}

const Stats=({section, value})=>{
    return(<li className="boxForValue">
        <span className="label">{section}</span>
        <span className="quantity">{value}</span>
    </li>)
}

export const Profile=({users})=>{
    console.log(users);
    return(
        <div className="profile">
        <div className="description">
            <Avatar image={users.avatar}/>
            <Name name={users.name}/>
            <Tag tag={users.tag}/>
            <Location location={users.location}/>
        </div>
        <ul className="stats">
            <Stats section="Followers" value={users.stats.followers}/>
            <Stats section="Views" value={users.stats.views}/>
            <Stats section="Likes" value={users.stats.likes}/>
        </ul>
        </div>
    )

}

Profile.defaultProps = {
	name: 'Name',
}
Profile.propTypes = {
	name: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	followers: PropTypes.number,
	views: PropTypes.number,
	likes: PropTypes.number
}