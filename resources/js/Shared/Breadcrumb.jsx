import React from 'react';
import { Link } from '@inertiajs/react'

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="flex items-center space-x-3 flex-1">
      {paths.map((crumb, index) => {
        const isLast = index === paths.length - 1;
        const to = '/' + paths.slice(0, index + 1).join('/');

        return (
          <React.Fragment key={index}>
            {!isLast ? (
              <Link href={to} className="hover:underline capitalize">
                <span className='text-gray-800 font-main text-sm'>
                {crumb}
                </span>
              </Link>
            ) : (
              <span className="capitalize">
                <span className='text-gray-800 font-main text-sm font-bold'>
                {crumb}
                </span>

              </span>
            )}

            
            {!isLast && 
              <span className='text-gray-800 font-main text-sm'>
              <svg fill="#000000" width="10px" height="10px" viewBox="0 0 24 24" id="right-2" dataName="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline id="primary" points="7.5 3 16.5 12 7.5 21" style={{fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2}}></polyline></g></svg>

            </span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
