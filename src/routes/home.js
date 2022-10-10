import { useEffect } from 'react';
import { fetchPosts } from '../apis/firestore';
import Tweet from '../components/Tweet/Tweet';
import TweetArea from '../components/TweetArea/TweetArea';
import MainContentHeader from '../components/UI/MainContentHeader';
import useFirestore from '../hooks/use-firestore';
import Spinner from '../components/UI/Spinner';
import { useNotificationContext } from '../store/notification-context';

const Home = () => {
  const { data, error, status, sendRequest } = useFirestore(fetchPosts);
  const { setMessage } = useNotificationContext();

  useEffect(() => {
    sendRequest();
  }, []);

  useEffect(() => {
    if (status === 'error') setMessage(error);
  }, [ status ]);

  return (
    <section>
      <MainContentHeader contentTitle={'Home'} />
      <TweetArea />
      {data &&
        data.map((tweet, index) => <Tweet key={index} {...tweet} />)}
      {status === 'pending' && <div className="flex mt-8 justify-center"><Spinner /></div>}
    </section>
  );
};

export default Home;
