import { supabase } from '../supabaseClient'

export function getRecipeImageUrl(imageName) {
  if (!imageName) return null
  
  return supabase.storage
    .from('recetas-imagenes')
    .getPublicUrl(`${imageName}.webp`)
    .data.publicUrl
}