import React from 'react';


const page = (componentClass: any): any => {
  return componentClass;
};

const pageLoading: React.FC = () => {
  return (
    <div>
      loading status
    </div>
  )
};

export default page;
