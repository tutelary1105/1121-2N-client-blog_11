import { useState, useEffect } from 'react';

// let api_url = `http://localhost:5000/api/card_11`;

import { supabase } from '../db/clientSupabase';

const BlogSupabase_11 = () => {
  const [name, setName] = useState('Lee yi kai');
  const [id, setId] = useState(211411011);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogsFromSupabase = async () => {
    try {
      // const response = await fetch(api_url);
      // const data = await response.json();

      let { data, error } = await supabase.from('card_11').select('*');

      console.log('blogs data', data);
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogsFromSupabase();
  }, []);

  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2>Blogs From Node Server</h2>
        <h3>
          {name},{id}
        </h3>
      </div>
      <div className='blogs-center'>
        {blogs.map((item) => {
          const { id, img, remote_url, title, category, descrip } = item;
          return (
            <article key={id} className='blog'>
              <img src={img} alt='Coffee photo' className='img blog-img' />
              <div className='blog-content'>
                <span>
                  {' '}
                  {category} <i className='fa-solid fa-mug-saucer'></i>
                </span>
                <h3>{title}</h3>
                <p>{descrip}</p>
                <a href='#'>read more</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default BlogSupabase_11;
