import { useState } from 'react';
import { useEffect } from 'react';
import { fetchPosts } from '../apis/firestore';
import Tweet from '../components/Tweet/Tweet';
import TweetArea from '../components/TweetArea/TweetArea';

const DUMMY = [
  {
      "user_name": "Dummy User",
      "text": "this is a test tweet",
      "created": {
          "seconds": 1532032980,
          "nanoseconds": 0
      },
      "quotes": 0,
      "favorites": 2,
      "id": "HaaTqDy5XZmJW1etSVvT",
      "user_id": "\"NzcIFu4IRyu6p89ZlUUs\"",
      "retweets": 1,
      "user_profile_image": "https://i.imgur.com/8nLFCVP.png",
      "user_m_name": "dummyuser123"
  },
  {
    "user_name": "Dummy User",
    "text": "this is a test tweet",
    "created": {
        "seconds": 1532032980,
        "nanoseconds": 0
    },
    "quotes": 0,
    "favorites": 2,
    "id": "HaaTqDy5XZmJW1etSVvT",
    "user_id": "\"NzcIFu4IRyu6p89ZlUUs\"",
    "retweets": 1,
    "user_profile_image": "https://i.imgur.com/8nLFCVP.png",
    "user_m_name": "dummyuser123"
},
{
  "user_name": "Dummy User",
  "text": "this is a test tweet",
  "created": {
      "seconds": 1532032980,
      "nanoseconds": 0
  },
  "quotes": 0,
  "favorites": 2,
  "id": "HaaTqDy5XZmJW1etSVvT",
  "user_id": "\"NzcIFu4IRyu6p89ZlUUs\"",
  "retweets": 1,
  "user_profile_image": "https://i.imgur.com/8nLFCVP.png",
  "user_m_name": "dummyuser123"
},
{
  "user_name": "Dummy User",
  "text": "this is a test tweet",
  "created": {
      "seconds": 1532032980,
      "nanoseconds": 0
  },
  "quotes": 0,
  "favorites": 2,
  "id": "HaaTqDy5XZmJW1etSVvT",
  "user_id": "\"NzcIFu4IRyu6p89ZlUUs\"",
  "retweets": 1,
  "user_profile_image": "https://i.imgur.com/8nLFCVP.png",
  "user_m_name": "dummyuser123"
},
{
  "user_name": "Dummy User",
  "text": "this is a test tweet",
  "created": {
      "seconds": 1532032980,
      "nanoseconds": 0
  },
  "quotes": 0,
  "favorites": 2,
  "id": "HaaTqDy5XZmJW1etSVvT",
  "user_id": "\"NzcIFu4IRyu6p89ZlUUs\"",
  "retweets": 1,
  "user_profile_image": "https://i.imgur.com/8nLFCVP.png",
  "user_m_name": "dummyuser123"
},{
  "user_name": "Dummy User",
  "text": "this is a test tweet",
  "created": {
      "seconds": 1532032980,
      "nanoseconds": 0
  },
  "quotes": 0,
  "favorites": 2,
  "id": "HaaTqDy5XZmJW1etSVvT",
  "user_id": "\"NzcIFu4IRyu6p89ZlUUs\"",
  "retweets": 1,
  "user_profile_image": "https://i.imgur.com/8nLFCVP.png",
  "user_m_name": "dummyuser123"
},{
  "user_name": "Dummy User",
  "text": "this is a test tweet",
  "created": {
      "seconds": 1532032980,
      "nanoseconds": 0
  },
  "quotes": 0,
  "favorites": 2,
  "id": "HaaTqDy5XZmJW1etSVvT",
  "user_id": "\"NzcIFu4IRyu6p89ZlUUs\"",
  "retweets": 1,
  "user_profile_image": "https://i.imgur.com/8nLFCVP.png",
  "user_m_name": "dummyuser123"
},{
  "user_name": "Dummy User",
  "text": "this is a test tweet",
  "created": {
      "seconds": 1532032980,
      "nanoseconds": 0
  },
  "quotes": 0,
  "favorites": 2,
  "id": "HaaTqDy5XZmJW1etSVvT",
  "user_id": "\"NzcIFu4IRyu6p89ZlUUs\"",
  "retweets": 1,
  "user_profile_image": "https://i.imgur.com/8nLFCVP.png",
  "user_m_name": "dummyuser123"
},{
  "user_name": "Dummy User",
  "text": "this is a test tweet",
  "created": {
      "seconds": 1532032980,
      "nanoseconds": 0
  },
  "quotes": 0,
  "favorites": 2,
  "id": "HaaTqDy5XZmJW1etSVvT",
  "user_id": "\"NzcIFu4IRyu6p89ZlUUs\"",
  "retweets": 1,
  "user_profile_image": "https://i.imgur.com/8nLFCVP.png",
  "user_m_name": "dummyuser123"
},{
  "user_name": "Dummy User",
  "text": "this is a test tweet",
  "created": {
      "seconds": 1532032980,
      "nanoseconds": 0
  },
  "quotes": 0,
  "favorites": 2,
  "id": "HaaTqDy5XZmJW1etSVvT",
  "user_id": "\"NzcIFu4IRyu6p89ZlUUs\"",
  "retweets": 1,
  "user_profile_image": "https://i.imgur.com/8nLFCVP.png",
  "user_m_name": "dummyuser123"
},{
  "user_name": "Dummy User",
  "text": "this is a test tweet",
  "created": {
      "seconds": 1532032980,
      "nanoseconds": 0
  },
  "quotes": 0,
  "favorites": 2,
  "id": "HaaTqDy5XZmJW1etSVvT",
  "user_id": "\"NzcIFu4IRyu6p89ZlUUs\"",
  "retweets": 1,
  "user_profile_image": "https://i.imgur.com/8nLFCVP.png",
  "user_m_name": "dummyuser123"
},{
  "user_name": "Dummy User",
  "text": "this is a test tweet",
  "created": {
      "seconds": 1532032980,
      "nanoseconds": 0
  },
  "quotes": 0,
  "favorites": 2,
  "id": "HaaTqDy5XZmJW1etSVvT",
  "user_id": "\"NzcIFu4IRyu6p89ZlUUs\"",
  "retweets": 1,
  "user_profile_image": "https://i.imgur.com/8nLFCVP.png",
  "user_m_name": "dummyuser123"
},{
  "user_name": "Dummy User",
  "text": "this is a test tweet",
  "created": {
      "seconds": 1532032980,
      "nanoseconds": 0
  },
  "quotes": 0,
  "favorites": 2,
  "id": "HaaTqDy5XZmJW1etSVvT",
  "user_id": "\"NzcIFu4IRyu6p89ZlUUs\"",
  "retweets": 1,
  "user_profile_image": "https://i.imgur.com/8nLFCVP.png",
  "user_m_name": "dummyuser123"
},{
  "user_name": "Dummy User",
  "text": "this is a test tweet",
  "created": {
      "seconds": 1532032980,
      "nanoseconds": 0
  },
  "quotes": 0,
  "favorites": 2,
  "id": "HaaTqDy5XZmJW1etSVvT",
  "user_id": "\"NzcIFu4IRyu6p89ZlUUs\"",
  "retweets": 1,
  "user_profile_image": "https://i.imgur.com/8nLFCVP.png",
  "user_m_name": "dummyuser123"
},{
  "user_name": "Dummy User",
  "text": "this is a test tweet",
  "created": {
      "seconds": 1532032980,
      "nanoseconds": 0
  },
  "quotes": 0,
  "favorites": 2,
  "id": "HaaTqDy5XZmJW1etSVvT",
  "user_id": "\"NzcIFu4IRyu6p89ZlUUs\"",
  "retweets": 1,
  "user_profile_image": "https://i.imgur.com/8nLFCVP.png",
  "user_m_name": "dummyuser123"
},
];

const Home = () => {
  const [ timeline, setTimeline ] = useState(DUMMY);

  // useEffect(() => {
  //   const getTimeline = async () => {
  //     const data = await fetchPosts();
  //     console.log(data);
  //     setTimeline(data);
  //   };
  //   getTimeline();
  // }, []);

  return (
    <>
      <div className="z-10 p-4 sticky left-0 top-0 bg-white/70 backdrop-blur-md">
        <h2 className="font-bold text-lg">Home</h2>
      </div>
      <TweetArea />
      {timeline && timeline.map((tweet, index) => <Tweet key={index} {...tweet}/>)}
    </>
  );
};

export default Home;