import { useQuery } from 'react-query';
import axios from 'axios';

import { useStepStatusRequest } from 'APICalls/StepLog/useStepLog.js';

export const getTags = async () => {
  const response = await axios.get('/api/v1/tag');

  return response.data.data.data;
};

export default function useTags() {
  const { sendStepStatusRequest } = useStepStatusRequest();
  const {
    data: tags,
    isSuccess: isTagsLoaded,
    status,
    isError,
    error
  } = useQuery(
    'tags',
    () => getTags(),
    {
      onSuccess: data =>
        sendStepStatusRequest('Tags fetched successfully', 'success')
    },
    {
      onError: () => sendStepStatusRequest('Error in fetching Tags', 'failure')
    }
  );
  return { tags, isTagsLoaded, status, isError, error };
}
