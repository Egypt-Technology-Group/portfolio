/**
 * Generic fetch wrapper for backend integration
 */
export async function apiClient(endpoint, { body, ...customConfig } = {}) {
  const headers = { 'Content-Type': 'application/json' }
  
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  try {
    const response = await window.fetch(endpoint, config)
    const data = await response.json()
    
    if (response.ok) {
      return data
    }
    
    throw new Error(data.message || response.statusText)
  } catch (err) {
    return Promise.reject(err.message || err)
  }
}

export default apiClient
