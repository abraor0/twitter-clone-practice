const Notification = ({ message }) => {
  return (
    <span className="text-sm px-8 py-4 bg-sky-500 text-white fixed bottom-5 rounded-md left-1/2 -translate-x-1/2 z-20">
      {message}
    </span>
  );
};

export default Notification;