import React, { useEffect, useState } from 'react';

const URL = 'http://localhost:3001';

function Post({id}) {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(`${URL}?postId=${id}`) // http://localhost:3001?postsId=1
      .then(response => response.json())
      .then(json => setData(json.body));
  }, [id]);

  return data == null ? (
    <div>Loading...</div>
  ) : (
    <div>{data}</div>
  );
}

export default Post;