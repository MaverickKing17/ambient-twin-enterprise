
import { GoogleGenAI, Type } from "@google/genai";
import { SensorData } from "../types";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const getDiagnosticReport = async (sensorData: SensorData[], equipmentInfo: string) => {
  const latestData = sensorData[sensorData.length - 1];
  const history = sensorData.slice(-5);

  const prompt = `
    Analyze the following heating and cooling data for a Toronto home.
    System Type: ${equipmentInfo}
    Current Data: ${JSON.stringify(latestData)}
    Recent History: ${JSON.stringify(history)}

    Provide a simple review including:
    1. Potential risks of things breaking soon.
    2. Maintenance tips for the local Toronto weather (considering very cold or humid days).
    3. Simple ways to save more money and energy.
    
    Use simple English. Do not use technical jargon or industry abbreviations.
  `;

  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      temperature: 0.7,
      topK: 40,
      thinkingConfig: { thinkingBudget: 4000 }
    }
  });

  return response.text;
};

export const checkRebateCompliance = async (customerData: any) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Check if this home is eligible for energy rebates in Toronto/Ontario based on this data: ${JSON.stringify(customerData)}. List any missing papers or easy steps to take. Use simple English and avoid technical words.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          eligible: { type: Type.BOOLEAN },
          estimatedRebateAmount: { type: Type.NUMBER },
          missingDocs: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          recommendation: { type: Type.STRING }
        },
        required: ["eligible", "estimatedRebateAmount", "missingDocs", "recommendation"]
      }
    }
  });

  return JSON.parse(response.text || '{}');
};
