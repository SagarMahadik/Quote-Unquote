import { useQuery } from 'react-query';
import axios from 'axios';

import { useStepStatusRequest } from 'APICalls/StepLog/useStepLog.js';

export const getAuthors = async () => {
  const response = await axios.get('/api/v1/author');

  return response.data.data.data;
};

export default function useAuthors() {
  const { sendStepStatusRequest } = useStepStatusRequest();
  const {
    data: authors,
    isSuccess: isAuthorsLoaded,
    status,
    isError,
    error
  } = useQuery(
    'authors',
    () => getAuthors(),
    {
      onSuccess: data =>
        sendStepStatusRequest('Authors fetched successfully', 'success')
    },
    {
      onError: () =>
        sendStepStatusRequest('Error in fetching Authors', 'failure')
    }
  );
  return { authors, isAuthorsLoaded, status, isError, error };
}
