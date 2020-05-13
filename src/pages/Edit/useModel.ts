import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import API from 'api';

export default function () {
  const { id } = useParams();

  const [dragon, setDragon] = useState<DragonItem>();
  const [loading, setLoading] = useState<boolean>(false);

  const saveForm = async (form: FormFields) => {
    setLoading(true);
    const [error, response] = await API.update(form);
    if (response?.status === 202) {
      swal('Sucesso', 'Dragão atualizado com sucesso!', 'success');
    } else {
      swal('Erro', 'Problema com a atualização do dragão, tente novamente!', 'error');
    }
    setLoading(false);
  };

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

  return { saveForm, loading, dragon };
}
