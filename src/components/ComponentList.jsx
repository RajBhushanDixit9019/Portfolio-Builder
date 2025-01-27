import { useMemo } from 'react';

const ComponentList = ({ selectedComponents, onSelect }) => {
  const availableComponents = useMemo(() => [
    {
      id: 'about',
      title: 'About Me',
      icon: '👤',
      description: 'Introduce yourself and your background'
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: '🛠️',
      description: 'Showcase your technical and soft skills'
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: '💼',
      description: 'Display your portfolio projects'
    },
    {
      id: 'experience',
      title: 'Experience',
      icon: '📈',
      description: 'List your work experience'
    },
    {
      id: 'education',
      title: 'Education',
      icon: '🎓',
      description: 'Share your educational background'
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: '📧',
      description: 'Add your contact information'
    }
  ], []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Available Components</h2>
      <div className="space-y-3">
        {availableComponents.map((component) => (
          <div key={component.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedComponents.includes(component.id)}
              onChange={() => onSelect(component.id)}
            />
            <span className="text-2xl">{component.icon}</span>
            <div>
              <h3 className="font-medium">{component.title}</h3>
              <p className="text-sm text-gray-600">{component.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentList; 