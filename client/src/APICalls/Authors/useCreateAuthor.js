import { useMutation } from 'react-query';

import axios from 'axios';
import { useStepStatusRequest } from 'APICalls/StepLog/useStepLog.js';

export default function useCreateSupplier() {
  const { sendStepStatusRequest } = useStepStatusRequest();
  const createAuthor = async body => {
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
      onSuccess: data =>
        sendStepStatusRequest('Authors Added successfully', 'success')
    },
    {
      onError: () =>
        sendStepStatusRequest('Error in creating Author', 'failure')
    }
  );

  return { mutateAsync, isError, error, status, isSuccess };
}
