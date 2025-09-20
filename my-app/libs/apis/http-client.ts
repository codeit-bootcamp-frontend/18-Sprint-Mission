class HttpClient {
  constructor(private baseUrl = process.env.NEXT_PUBLIC_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  createFetchInput(endpoint: string) {
    return `${this.baseUrl}/${endpoint}`;
  }

  async get(endpoint: string) {
    const response = await fetch(this.createFetchInput(endpoint));
    if (!response.ok) {
      throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
    }
    return response.json();
  }

  async post(endpoint: string, data: any) {
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

  async patch(endpoint: string, data: any) {
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

  async delete(endpoint: string) {
    const response = await fetch(this.createFetchInput(endpoint), {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Error deleting ${endpoint}: ${response.statusText}`);
    }
    return response.json();
  }
}

export default HttpClient;
