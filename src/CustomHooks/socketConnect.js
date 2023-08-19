import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const useSocketConnection = (serverUrl) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(serverUrl);

    newSocket.on('connect', () => {
      console.log('Connected to socket server');
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [serverUrl]);

  return socket;
};

export default useSocketConnection;
