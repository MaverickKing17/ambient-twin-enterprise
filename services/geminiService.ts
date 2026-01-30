
import { GoogleGenAI, Type } from "@google/genai";
import { SensorData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDiagnosticReport = async (sensorData: SensorData[], equipmentInfo: string) => {
  const latestData = sensorData[sensorData.length - 1];
  const history = sensorData.slice(-5);

  const prompt = `
    Analyze the following HVAC telemetry for a Toronto residential property.
    Equipment: ${equipmentInfo}
    Current Data: ${JSON.stringify(latestData)}
    Recent History: ${JSON.stringify(history)}

    Provide a professional diagnostic report including:
    1. Potential component failure risks.
    2. Maintenance recommendations tailored for GTA climate (considering humidity/cold extremes).
    3. Efficiency optimizations.
  `;

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
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Evaluate eligibility for the Enbridge HER+ Grant (Toronto/Ontario) based on this customer data: ${JSON.stringify(customerData)}. Highlight missing documentation.`,
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
