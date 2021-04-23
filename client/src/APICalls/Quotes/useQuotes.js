import { useQuery } from 'react-query';
import axios from 'axios';
export const getQuotes = async () => {
  console.log('In a get qutes');

  const response = await axios.get('/api/v1/quote');
  console.log(response);
  return response.data.data.data;
};

export default function useQuotes() {
  const {
    data: quotes,
    isSuccess: isQuotesLoaded,
    status,
    isError,
    error
  } = useQuery('quotes', () => getQuotes(), {
    onSuccess: data => console.log(data)
  });
  return { quotes, isQuotesLoaded, status, isError, error };
}
