import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('recetas')
          .select('*')
          .order('id', { ascending: false });

        if (error) throw error;

        setRecipes(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, []);

  return { recipes, loading, error };
}