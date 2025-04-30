import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const token = import.meta.env.INSTAGRAM_TOKEN;

  const url = `https://graph.instagram.com/me/media?fields=id,media_url,caption,permalink,media_type,timestamp&limit=6&access_token=${token}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch Instagram media.' }), {
      status: 500,
    });
  }
};
