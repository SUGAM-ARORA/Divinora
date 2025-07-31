// app/api/path-recommendation/route.ts
import { NextResponse } from 'next/server';
import { HfInference } from '@huggingface/inference';

const HF_TOKEN = process.env.HUGGINGFACE_TOKEN;
const hf = new HfInference(HF_TOKEN!, {
  requestTimeout: 20000 // 20 seconds timeout to work within serverless limits
});

export async function POST(request: Request) {
  try {
    const { answers } = await request.json();

    if (!answers || !Array.isArray(answers)) {
      throw new Error('Invalid answers format');
    }

    const prompt = `
      Act as a Hindu spiritual guide. Recommend a path (Bhakti/Jnana/Karma/Raja Yoga) based on:
      1. Goal: ${answers[0] || 'Not specified'}
      2. Deity: ${answers[1] || 'Not specified'}
      3. Practice: ${answers[2] || 'Not specified'}
      4. Time: ${answers[3] || 'Not specified'}
      5. Value: ${answers[4] || 'Not specified'}
      Respond in markdown with 2-3 specific practices and 1 scripture recommendation.
    `;

    const response = await hf.textGeneration({
      model: 'mistralai/Mistral-7B-Instruct-v0.1',
      inputs: prompt,
      parameters: {
        max_new_tokens: 500,
        temperature: 0.7,
        return_full_text: false
      }
    });

    return NextResponse.json({
      recommendation: response.generated_text
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate recommendation.' },
      { status: 500 }
    );
  }
}
