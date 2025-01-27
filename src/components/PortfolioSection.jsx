import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PortfolioSection = ({ section, theme, template, onDelete, onUpdate }) => {
  const [content, setContent] = useState(section.content);

  const handleContentChange = (value) => {
    setContent(value);
    onUpdate(value);
  };

  const modules = {
    toolbar: [
      [{ 'font': [] }],
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  return (
    <div className={`p-6 rounded-lg shadow-md mb-4 ${theme.backgroundColor} ${theme.textColor} ${theme.borderColor}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{section.title}</h2>
        <button
          onClick={onDelete}
          className="text-gray-500 hover:text-red-500 text-xl"
        >
          ×
        </button>
      </div>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleContentChange}
        modules={modules}
        placeholder={`Add content for ${section.title.toLowerCase()}...`}
      />
    </div>
  );
};

export default PortfolioSection; 