import React from 'react';
import ArticleCard from './ArticleCard';
import { Article } from '../types';

interface ArticleListProps {
    articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    return (
        <div className="space-y-6">
            {articles.map((article) => (
                <ArticleCard
                    key={article.id}
                    article={article}
                />
            ))}
        </div>
    );
};

export default ArticleList;