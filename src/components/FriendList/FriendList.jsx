import { FriendListItem } from './FriendListItem';

import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friends => (
                <FriendListItem friend={friends} />
            ))}          
        </ul>
    )
}