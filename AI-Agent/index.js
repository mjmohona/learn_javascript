import OpenAI from "openai";


const OPENAI_API_KEY =
    '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';


const client = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

//tools
function getWeatherDetails(city = ''){
    if (city.toLowerCase() === "Dhaka") return '10°C';
    if (city.toLowerCase() === "Dhaka") return '10°C';
    if (city.toLowerCase() === "Dhaka") return '10°C';
}