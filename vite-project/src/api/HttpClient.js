function trimPath(str) {
  let trimmed = str.trim();
  while (trimmed.startsWith("/")) {
    trimmed = trimmed.slice(1);
  }
  return trimmed;
}

function createUrl(baseUrl, path, searchParams) {
  const trimmed = trimPath(path);
  const url = new URL(`${baseUrl}/${trimmed}`);

  if (!searchParams) {
    return url;
  }

  Object.keys(searchParams).forEach((key) =>
    url.searchParams.append(key, searchParams[key])
  );

  return url;
}

function HttpClient({ baseUrl }) {
  this.baseUrl = baseUrl;

  HttpClient.prototype.get = async function (target, params) {
    let url;
    if (baseUrl) {
      url = createUrl(baseUrl, target, params);
    } else {
      url = target;
    }

    const response = await fetch(url, { method: "GET" });
    if (!response.ok) {
      throw new Error(`HTTP error (status ${response.status}`);
    }

    const json = await response.json();
    return json;
  };
}

export default HttpClient;

const client = new HttpClient({ baseUrl: import.meta.env.VITE_API_BASE_URL });

export { client };
