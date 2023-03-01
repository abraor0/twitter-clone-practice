import Home from '../components/Icons/Home';
import Explore from '../components/Icons/Explore';
import Notification from '../components/Icons/Notification';
import Message from '../components/Icons/Message';
import Bookmark from '../components/Icons/Bookmark';
import List from '../components/Icons/List';
import Profile from '../components/Icons/Profile';
import More from '../components/Icons/More';


const mainNavOptions = [
  {
    text: 'Home',
    Icon: Home,
    path: '/home'
  },
  {
    text: 'Explore',
    Icon: Explore,
    path: '/explore'
  },
  {
    text: 'Notifications',
    Icon: Notification,
    path: '/notifications'
  },
  {
    text: 'Messages',
    Icon: Message,
    path: '/messages'
  },
  {
    text: 'Bookmarks',
    Icon: Bookmark,
    path: '/bookmarks'
  },
  {
    text: 'Lists',
    Icon: List,
    path: '/lists'
  },
  {
    text: 'Profile',
    Icon: Profile,
    path: '/profile'
  },
  {
    text: 'More',
    Icon: More,
    path: '/more'
  }
];

export default mainNavOptions