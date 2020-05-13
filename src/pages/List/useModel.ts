import { useState, useEffect, useCallback } from 'react';
import API from 'api';

export default function () {
  const [dragons, setDragons] = useState<DragonItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetch = useCallback(async () => {
    setLoading(true);
    const [error, response] = await API.list();
    if (response) {
      setDragons(response);
    }
    setLoading(false);
  }, []);

  const remove = async (id: string) => {
    setLoading(true);
    const [error, response] = await API.remove(id);
    if (response === 200) {
      fetch();
    }
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return { dragons, loading, remove };
}
