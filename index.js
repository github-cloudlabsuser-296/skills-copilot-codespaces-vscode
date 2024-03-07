import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';


function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
}

const reverseAndCapitalize = (sentence) => {
    const reversed = sentence.split('').reverse().join('');
    const capitalized = reversed.charAt(0).toUpperCase() + reversed.slice(1);
    return capitalized;
};

const reversedSentence = reverseAndCapitalize('type markdown here');

const data = [
    [{ name: 'John' }, { name: 'Jane' }],
    [{ name: 'Bob' }]
];

const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names); // Output: ['John', 'Jane', 'Bob']

export default MarkdownEditor;