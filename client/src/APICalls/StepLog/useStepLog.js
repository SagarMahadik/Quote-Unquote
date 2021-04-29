import { useState, useCallback } from 'react';
import axios from 'axios';

export const useStepStatusRequest = () => {
  const [stepStatusError, setError] = useState();

  const sendStepStatusRequest = useCallback(
    async (
      step,
      status,
      config = { headers: { 'Content-Type': 'application/JSON' } }
    ) => {
      const body = JSON.stringify({
        step,
        status
      });

      const response = await axios.post('/api/v1/stepLogs', body, config);
      const responseData = response.status;
      return responseData;
    },
    []
  );

  return { sendStepStatusRequest, stepStatusError };
};
