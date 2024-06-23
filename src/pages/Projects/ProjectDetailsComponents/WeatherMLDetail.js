// WeatherMLDetail.js
import React from 'react';
import screenshot1 from '../../../assets/images/projects/Project-readme/ml/data.jpg'; 
import screenshot2 from '../../../assets/images/projects/Project-readme/ml/sql.jpg'; 
import screenshot3 from '../../../assets/images/projects/Project-readme/ml/py-script.jpg'; 
import screenshot4 from '../../../assets/images/projects/Project-readme/ml/powerbi.png'; 

const WeatherMLDetail = () => (
  <div>
    <p>
      The project makes use of various data sources to gather weather information such as temperature, precipitation, 
      pressure, and other important meteorological data. This data is then processed and analyzed using various data 
      analysis and visualization tools such as SQL, Excel, Power BI/Tableau, and Python. The results of this analysis 
      are then presented to the users through interactive visualizations and graphs, making it easier for them to 
      understand and analyze weather trends and patterns.
    </p>
    <h3>Project Highlights</h3>
    <ul className="bullet-points">
      <li>Cleaned a weather dataset spanning from 2022 to 2033 using Python scripting, ensuring accuracy and consistency of data.</li>
      <li>Analyzed the cleaned dataset using SQL queries to extract meaningful insights and trends in the weather data. Utilized an ARIMA time series model to predict weather forecasts for the years 2034-2035, taking into account past weather patterns and trends.</li>
      <li>Developed a Power BI dashboard to visualize the insights and provide a user-friendly interface for exploring the weather data.</li>
    </ul>
    <h3>Technologies Used</h3>
    <ul className="technologies-used">
      <li><strong>SQL (MySQL):</strong> Used for managing and storing the large amounts of weather data that is collected for the analysis.</li>
      <li><strong>Power BI/Tableau:</strong> Used for creating interactive and visually appealing dashboards, charts, and graphs that present the results of the weather data analysis.</li>
      <li><strong>Excel:</strong> Used for performing basic data analysis and manipulation tasks such as sorting, filtering, and aggregating data.</li>
      <li><strong>Python:</strong> Used for developing custom scripts and algorithms that are used to process and analyze the weather data. The project also makes use of various Python libraries such as Pandas and Matplotlib for data analysis and visualization purposes.</li>
    </ul>
    <h3>Visual Overview</h3>
    <div>
        <img src={screenshot1} alt="defect Screenshot 1" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
        <img src={screenshot2} alt="defect Screenshot 2" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
        <img src={screenshot3} alt="defect Screenshot 3" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
        <img src={screenshot4} alt="defect Screenshot 4" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
        
    </div>
  </div>
);

export default WeatherMLDetail;
