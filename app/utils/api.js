export const post = (url, request, isReturnOriginalResponse) =>
  fetchRequest(
    url,
    {
      method: 'POST',
      ...getFetchOptions(request),
    },
    isReturnOriginalResponse,
  );

const getFetchOptions = request => ({
  data: request,
  timeout: 60000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchRequest = (
  url,
  options = { credentials: null },
  isReturnOriginalResponse,
) =>
  fetch(
    getFullApiUrl(url),
    Object.assign(options, { credentials: 'include' }),
    isReturnOriginalResponse,
  );

export const getFullApiUrl = url => `${url}`;

export const getLocalStorageKey = key =>
  new Promise(resolve => resolve(localStorage.getItem(key))).then(data => {
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  });

export const setLocalStorageKey = ({ key, value }) =>
  new Promise(resolve => resolve(localStorage.setItem(key, value)));
