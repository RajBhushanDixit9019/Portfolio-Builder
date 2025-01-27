import { useState } from 'react';
import { jsPDF } from 'jspdf';
import ComponentList from '../components/ComponentList';
import PortfolioSection from '../components/PortfolioSection';
import { themes } from '../themes';
import { templates } from '../templates';

function Editor() {
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [selectedTemplate, setSelectedTemplate] = useState('classic');

  const handleSelectComponent = (componentId) => {
    setSelectedComponents((prevSelected) =>
      prevSelected.includes(componentId)
        ? prevSelected.filter((id) => id !== componentId)
        : [...prevSelected, componentId]
    );
  };

  const sections = selectedComponents.map((componentId) => {
    const component = {
      id: componentId,
      title: componentId.charAt(0).toUpperCase() + componentId.slice(1),
      content: '',
    };
    return component;
  });

  const handleDownloadPDF = () => {
    const fileName = prompt("Enter the file name for your PDF:", "portfolio");
    if (!fileName) return;

    const doc = new jsPDF();

    sections.forEach((section, index) => {
      doc.setFontSize(16);
      doc.text(section.title, 10, 10 + index * 30);
      doc.setFontSize(12);
      doc.text(section.content, 10, 20 + index * 30);
    });

    doc.save(`${fileName}.pdf`);
  };

  const handleDownloadHTML = () => {
    const fileName = prompt("Enter the file name for your HTML:", "portfolio");
    if (!fileName) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Portfolio</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .section { margin-bottom: 20px; }
          .section-title { font-size: 24px; font-weight: bold; }
          .section-content { margin-top: 10px; }
        </style>
      </head>
      <body>
        ${sections.map(section => `
          <div class="section">
            <div class="section-title">${section.title}</div>
            <div class="section-content">${section.content}</div>
          </div>
        `).join('')}
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <ComponentList
            selectedComponents={selectedComponents}
            onSelect={handleSelectComponent}
          />
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Select Theme</h3>
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {Object.keys(themes).map((theme) => (
                <option key={theme} value={theme}>
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Select Template</h3>
            <select
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {Object.keys(templates).map((template) => (
                <option key={template} value={template}>
                  {template.charAt(0).toUpperCase() + template.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-span-9">
          {sections.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">
                Select components from the left to build your portfolio
              </p>
            </div>
          ) : (
            sections.map((section) => (
              <PortfolioSection
                key={section.id}
                section={section}
                theme={themes[selectedTheme]}
                template={templates[selectedTemplate]}
                onDelete={() => handleSelectComponent(section.id)}
                onUpdate={(content) => {
                  const updatedSections = sections.map((s) =>
                    s.id === section.id ? { ...s, content } : s
                  );
                  setSelectedComponents(updatedSections.map((s) => s.id));
                }}
              />
            ))
          )}
          {sections.length > 0 && (
            <div className="text-right mt-4 space-x-2">
              <button
                onClick={handleDownloadPDF}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Download as PDF
              </button>
              <button
                onClick={handleDownloadHTML}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Download as HTML
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Editor; 