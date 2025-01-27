import { useDroppable } from '@dnd-kit/core';

const DroppableArea = ({ children }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: 'droppable-area',
  });

  return (
    <div 
      ref={setNodeRef}
      className={`min-h-[200px] bg-gray-50 rounded-lg p-4 transition-colors ${
        isOver ? 'bg-blue-50 border-2 border-dashed border-blue-300' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default DroppableArea; 