import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      }),
    });

    const data = await response.json();

    // 🧪 Debug: Log full response
    console.log("🧪 OpenAI raw response:", data);

    // ❗ Check if response is valid
    if (!data.choices || !data.choices[0]) {
      return NextResponse.json(
        { error: 'OpenAI did not return a valid response', full: data },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error("🔥 API Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
