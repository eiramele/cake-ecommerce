/** In this file, we will export all the utility functions that we will use in our application.
 *  These are functions that are not directly related to the application's business logic, but
 *  are used to help us to keep our code clean and organized. For example,
 * functions to format dates, to format currency, to extract data from an object, etc. */
export function formatNumber(value: number): string {
    // Round number to 2 decimals
    const rounded = Math.round(value * 100) / 100;
  
    // Converteix el número a un string, eliminant els decimals innecessaris
    return rounded % 1 === 0 ? rounded.toString() : rounded.toFixed(2);
  }
  
