import React from "react";

function Headlines() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchLocation = async () => {
      await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-09-17&sortBy=publishedAt&apiKey=e5851bb345f24089aecb3088fe55c057")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    };
    fetchLocation();
  }, []);
  
  if(!data.length) return <div>Loading...</div>
  
  return (
    <div className="App">
      Author: {data.title}
      <br />
      url: {data.url}
      <br />
      urlToImage: {data.urlToImage
}
      <br/>
    Name: {data.articles[0].source.name}
    </div>
  );
}

export default Headlines;


