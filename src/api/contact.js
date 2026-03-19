import apiClient from './client'

/**
 * Submit contact form payload to backend
 * 
 * @param {Object} payload - { name, email, subject, message }
 * @returns {Promise}
 */
export const submitContactForm = async (payload) => {
  // Replace with actual API endpoint when backend is ready
  // return apiClient('/api/contact', { body: payload })
  
  // For now, simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Form submitted to API:', payload)
      resolve({ success: true, message: 'Message sent successfully!' })
    }, 1500)
  })
}
