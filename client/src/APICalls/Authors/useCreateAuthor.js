import { useMutation } from 'react-query';

import axios from 'axios';
export default function useCreateSupplier() {
  const createAuthor = async body => {
    console.log(body);

    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };
    try {
      const res = await axios.post(`/api/v1/author/`, body, config);
      return res.data.data.data;
    } catch (err) {
      throw new Error('There was an error creating author');
    }
  };

  const { mutateAsync, isError, error, status, isSuccess } = useMutation(
    createAuthor,
    {
      onSuccess: () => {
        console.log('done');
      }
    },
    {
      onError: () => console.log(error)
    }
  );

  return { mutateAsync, isError, error, status, isSuccess };
}
