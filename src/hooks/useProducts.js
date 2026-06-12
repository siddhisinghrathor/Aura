import { useState, useEffect } from 'react';

const useProducts = () => {
  // TODO: Implement product fetching and loading/error state management
  return {
    products: [],
    loading: false,
    error: null,
  };
};

export default useProducts;
