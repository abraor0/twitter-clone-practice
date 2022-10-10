import ProfileHeader from '../components/Profile/ProfileHeader';
import MainContentHeader from '../components/UI/MainContentHeader';

const DUMMY_USER = {
  user_name: 'Toguro',
  created: {
    seconds: 1532032980,
    nanoseconds: 0
  },
  user_id: '"NzcIFu4IRyu6p89ZlUUs"',
  user_profile_image:
    'https://pbs.twimg.com/profile_images/1576260095931043842/OU1ZCTCZ_200x200.jpg',
  user_banner_image:
    'https://pbs.twimg.com/profile_banners/1182861037/1660077471/600x200',
  user_m_name: 'toguro',
  follows: false,
  profile_bio: 'Ceo Mansão Maromba',
  job: '',
  loc: '',
  link: '',
  following: 109,
  followers: 240310
};

const Profile = () => {
  return (
    <section>
      <MainContentHeader />
      <ProfileHeader user={DUMMY_USER} />
    </section>
  );
};

export default Profile;
