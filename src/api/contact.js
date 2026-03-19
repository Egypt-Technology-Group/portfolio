import apiClient from './client'

/**
 * Submit contact form payload to backend
 * 
 * @param {Object} payload - { name, email, subject, message }
 * @returns {Promise}
 */
export const submitContactForm = async (payload) => {
  const endpoint = import.meta.env.VITE_API_ENDPOINT || '/api/contact'
  
  // If we have a real endpoint, use the API client
  if (import.meta.env.VITE_API_ENDPOINT) {
    return apiClient(endpoint, { body: payload })
  }
  
  // Fallback / Development Simulation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Message sent successfully (simulated)!' })
    }, 1500)
  })
}
