import { useQuery } from 'react-query';
import axios from 'axios';

import { useStepStatusRequest } from 'APICalls/StepLog/useStepLog.js';

export const getQuotes = async () => {
  const response = await axios.get('/api/v1/quote');

  return response.data.data.data;
};

export default function useQuotes() {
  const { sendStepStatusRequest } = useStepStatusRequest();

  const {
    data: quotes,
    isSuccess: isQuotesLoaded,
    status,
    isError,
    error
  } = useQuery(
    'quotes',
    () => getQuotes(),
    {
      onSuccess: data =>
        sendStepStatusRequest('Quotes fetched successfully', 'success')
    },
    {
      onError: () =>
        sendStepStatusRequest('Error in fetching Quotes', 'failure')
    },
    { staleTime: 10000 }
  );
  return { quotes, isQuotesLoaded, status, isError, error };
}
