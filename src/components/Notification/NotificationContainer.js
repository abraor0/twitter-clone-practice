import { useNotificationContext } from '../../store/notification-context';
import Notification from './Notification';

const NotificationContainer = () => {
  const {message} = useNotificationContext();

  return (
    <div>
      {message && <Notification message={message}/>}
    </div>
  );
};

export default NotificationContainer;