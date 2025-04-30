// src/pages/api/google.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const GOOGLE_API_KEY = import.meta.env.GOOGLE_API_KEY;

  try {
    const reviewsResponse = await fetch(
      `https://places.googleapis.com/v1/places/ChIJ5w24VAbYcWURW4H1mhxBAqQ?fields=reviews&key=${GOOGLE_API_KEY}`
    );

    if (!reviewsResponse.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch reviews' }), { status: 400 });
    }

    const reviewsData = await reviewsResponse.json();

    return new Response(JSON.stringify({
      reviews: reviewsData.reviews || [],
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
};