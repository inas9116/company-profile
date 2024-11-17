import React from 'react';

type BackgroundComponentProps = {
  variant: number;
};

const BackgroundComponent: React.FC<BackgroundComponentProps> = ({ variant }) => {
  return (
    <div className={`w-full h-screen ${variant === 1 ? 'bg-gradient-to-br from-blue-900 to-white' : ''}
                                    ${variant === 2 ? 'bg-gradient-to-br from-blue-300 to-gray-300' : ''}
                                    ${variant === 3 ? 'bg-gradient-to-br from-teal-300 to-blue-900' : ''}
                                    ${variant === 4 ? 'bg-gradient-to-br from-yellow-400 to-orange-100' : ''}
                                    ${variant === 5 ? 'bg-gradient-to-br from-purple-300 to-gray-200' : ''}`}>
    </div>
  );
};

export default BackgroundComponent;
