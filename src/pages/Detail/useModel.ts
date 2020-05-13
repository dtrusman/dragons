import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from 'api';

export default function () {
  const [dragon, setDragon] = useState<DragonItem>();
  const [loading, setLoading] = useState<boolean>(false);

  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const [error, response] = await API.details(id);
      if (response) {
        setDragon(response);
      }
      setLoading(false);
    };
    fetch();
  }, []);

  return { dragon, loading };
}
