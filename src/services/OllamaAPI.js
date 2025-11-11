export async function handleInput(text) {
  console.log('Text recieved from Prompt.jsx: ' + text);

  const obj = {
    model: 'llama3.2',
    prompt: text,
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
  console.log('Generated text:\n', data.response);
  return data.response;
}
