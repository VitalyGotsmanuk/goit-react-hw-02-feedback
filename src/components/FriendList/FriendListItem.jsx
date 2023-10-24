import css from './FriendList.module.css';



export const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline, id } = friend;
    return (
        <li className={css.item} id={id}>
            <span className={
                isOnline ? `${css.online}` : `${css.offline}`
            }></span>

            <img className={css.avatar} src={avatar} alt={name} width="48"/>
            <p className={css.name}>{name}</p>
        </li>
    )
}