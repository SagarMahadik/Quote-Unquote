import { useQuery } from 'react-query';
import axios from 'axios';
export const getTags = async () => {
  const response = await axios.get('/api/v1/tag');
  console.log(response);
  return response.data.data.data;
};

export default function useTags() {
  const {
    data: tags,
    isSuccess: isTagsLoaded,
    status,
    isError,
    error
  } = useQuery('tags', () => getTags(), {
    onSuccess: data => console.log(data)
  });
  return { tags, isTagsLoaded, status, isError, error };
}
