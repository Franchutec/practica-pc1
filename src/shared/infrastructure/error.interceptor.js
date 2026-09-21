/**
 *
 * Axios Interceptor for handling error in API requests.
 *
 * @remarks
 * This interceptor captures errors from Axios request and provides a structured way to handle them.
 * It logs detailed information about the error to the console and returns a user-friendly error message.
 *
 * @type {{onResponse: function(*): *, onError: function(*): Promise<never>}}
 */

export const errorInterceptor = {
    onResponse: (response) => response,
    onError: (error) => {
        let message;
        if(error.response) {
            console.error('Data:', error.response.data);
            console.error('Status:', error.response.status);
            console.error('Headers:', error.response.headers);
            message = error.response.data['message'] || `Error ${error.response.status}: ${error.response.statusText}`;
        } else if (error.request) {
            console.error('Request:', error.request);
            message = 'No response received from the server. Please check your connection.';
        }
        else {
            console.error('Error Message:', error.message);
            message = error.message;
        }
        return Promise.reject(message);
    }

}