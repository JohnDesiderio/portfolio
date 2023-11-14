import React from 'react';
import ProjectComponent, { IProjectComponent } from './ProjectTemplate';

const name = "Content-Based Recommendation System for Movies";
const details = [
    'Collaborated with two students to compare the merit of multiple information filtering recommender system algorithms', 
    'Implemented the recommender system using the term frequency-inverse document frequency algorithm', 
    'Tested the recommender system on participants to gauge the reception of the movie recommendations', 
    'Presented our research in a paper that compared the results of three different recommender systems', 
];
const link = 'https://github.com/JohnDesiderio/Data_Mining_Final_Proj/blob/main/Content%20Based%20Recommender.ipynb';

const RecommenderSystem:React.FC<{}> = () => {
    const props:IProjectComponent = {
        details: details,
        name: name,
        link: link,
        sh: 'recommender'
    }
    
    return (<ProjectComponent {...props}/>)
}

export default RecommenderSystem;