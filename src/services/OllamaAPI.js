export async function handleInput(text) {
  console.log('Text recieved from Prompt.jsx: ' + text);

  const obj = {
    model: 'llama3.2',
    prompt: `
      Generate a single paragraph containing 150-200 words based on the following topic: "${text}".

      STRICT RULES:
      - The output must be ONLY the paragraph.
      - Do NOT include introductions, explanations, apologies, commentary, or formatting.
      - Do NOT include quotes around the paragraph.
      - Do NOT say anything like “Here is your paragraph.”
      - Do NOT include titles or headings.
      - Output ONLY the paragraph text itself.
      - If you cannot follow all rules exactly, output an empty string.`,
    stream: false,
  };

  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'applicatoin/json',
    },
    body: JSON.stringify(obj),
  });

  const data = await response.json();
  // console.log('Generated text:\n', data.response);
  return data.response;
}
