import { useState } from 'react';
import swal from 'sweetalert';
import API from 'api';

export default function () {
  const [loading, setLoading] = useState<boolean>(false);

  const saveForm = async (form: FormFields) => {
    setLoading(true);
    const [error, response] = await API.save(form);
    if (response?.status === 201) {
      swal('Sucesso', 'Dragão cadastrado com sucesso!', 'success');
    }
    setLoading(false);
  };

  return { saveForm, loading };
}
