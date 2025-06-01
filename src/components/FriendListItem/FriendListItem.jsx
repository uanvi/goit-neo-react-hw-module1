import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={styles.item}>
            <img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} />
            <p className={styles.name}>{name}</p>
            <p className={isOnline ? styles.online : styles.offline}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
};

export default FriendListItem;