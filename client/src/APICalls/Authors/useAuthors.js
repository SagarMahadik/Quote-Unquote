import { useQuery } from 'react-query';
import axios from 'axios';
export const getAuthors = async () => {
  const response = await axios.get('/api/v1/author');
  console.log(response);
  return response.data.data.data;
};

export default function useAuthors() {
  const {
    data: authors,
    isSuccess: isAuthorsLoaded,
    status,
    isError,
    error
  } = useQuery('authors', () => getAuthors(), {
    onSuccess: data => console.log(data)
  });
  return { authors, isAuthorsLoaded, status, isError, error };
}
