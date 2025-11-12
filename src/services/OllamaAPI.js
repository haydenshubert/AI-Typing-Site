export async function handleInput(text) {
  console.log('Text recieved from Prompt.jsx: ' + text);

  const obj = {
    model: 'llama3.2',
    prompt:
      'I want you to make a one block paragraph which will be used for a typing speed test and you should have 150 to 200 words in your generated response. Only respond with the one block paragraph based on this prompt: ' +
      text +
      ', and nothing else. This will be used for a typing speed test so make it in that format.',
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
