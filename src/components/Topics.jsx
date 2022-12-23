import { useState, useEffect } from "react";
import { fetchTopics } from "../utils/api";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topicsList, setTopicsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTopics().then(topicsArray => {
      setTopicsList(topicsArray);
      setIsLoading(false);
    });
  }, [topicsList]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className="ul--articleCardList">
      {topicsList.map(topic => (
        <Link to={`/topics/${topic.slug}`} key={topic.slug}>
          <li className="li--articalCard__articleList">
            <h3 className="h3--li--topicsList">{topic.slug}</h3>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Topics;
