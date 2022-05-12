import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

export default function ArchiveRelative(props) {
  const { blogs } = props;
  return (
    <>
      {blogs?.map((blog) => (
        <Link to={blog.url} key={blog.title}>
          <div>
            <h4>{blog.title}</h4>
            {parse(blog.body.slice(0, 80))}
          </div>
        </Link>
      ))}
    </>
  );
}
