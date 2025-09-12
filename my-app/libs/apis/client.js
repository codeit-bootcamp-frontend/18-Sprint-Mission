class Client {
  constructor(baseUrl = process.env.NEXT_PUBLIC_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  createFetchInput(endpoint) {
    return `${this.baseUrl}/${endpoint.replace()}`;
  }

  async get(endpoint) {
    const response = await fetch(this.createFetchInput(endpoint));
    if (!response.ok) {
      throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
    }
    return response.json();
  }

  async post(endpoint, data) {
    const response = await fetch(this.createFetchInput(endpoint), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Error posting ${endpoint}: ${response.statusText}`);
    }
    return response.json();
  }

  async patch(endpoint, data) {
    const response = await fetch(this.createFetchInput(endpoint), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Error patching ${endpoint}: ${response.statusText}`);
    }
    return response.json();
  }
}

export default Client;
