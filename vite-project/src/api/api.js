function trimPath(str) {
  let trimmed = str.trim();
  while (trimmed.startsWith("/")) {
    trimmed = trimmed.slice(1);
  }
  return trimmed;
}

export function createUrl(path, params) {
  const trimmed = trimPath(path);
  const url = new URL(`${import.meta.env.VITE_API_BASE_URL}/${trimmed}`);

  if (!params) {
    return url;
  }

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  return url;
}
