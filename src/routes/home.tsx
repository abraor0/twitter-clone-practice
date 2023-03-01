import { useEffect } from 'react';
import { fetchPosts, TweetTypes } from '../apis/firestore';
import Tweet from '../components/Tweet/Tweet';
import TweetArea from '../components/TweetArea/TweetArea';
import MainContentHeader from '../components/UI/MainContentHeader';
import useHttp from '../hooks/use-http';
import Spinner from '../components/UI/Spinner';
import { useNotificationContext } from '../store/notification-context';

const Home = () => {
  const { data, error, status, sendRequest } = useHttp(fetchPosts);
  const { setMessage } = useNotificationContext();

  useEffect(() => {
    sendRequest();
  }, [ ]);

  useEffect(() => {
    if (status === 'error' && error) setMessage(error);
  }, [status, error]);


  return (
    <section>
      <MainContentHeader contentTitle={'Home'} />
      <TweetArea />
      {data &&
        // TODO: Remove assertion
        data.map((tweet, index) => <Tweet key={index} {...(tweet as TweetTypes)} />)}
      {status === 'pending' && <div className="flex mt-8 justify-center"><Spinner /></div>}
    </section>
  );
};

export default Home;
