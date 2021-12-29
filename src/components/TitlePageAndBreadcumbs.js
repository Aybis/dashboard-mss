import React from 'react';
import Breadcrumbs from './Breadcumbs';

export default function TitlePageAndBreadcumbs({ title }) {
  return (
    <div className="relative flex justify-between pt-2 mb-8">
      <h1 className="text-4xl font-bold text-gray-900"> {title}</h1>
      <Breadcrumbs />
    </div>
  );
}
