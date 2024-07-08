# Project01
This is project-01 for lede program.
<br>
Link to the project-01 (https://riyonakasaka.github.io/Vacanthouses-project1/)

## Title
Japan Faces Growing Issue of Vacant Houses
<br>
Based on Data Released by the Ministry of Internal Affairs and Communications in April 2024

## Aim
To clearly convey the current status of vacant houses in Japan using data released two months ago.

## Findings
1.Vacancy rates are more pronounced in rural areas rather than urban centers.
2.Areas with higher aging rates in Japan (the proportion of people aged 65 and over in each prefecture's total population) also exhibit higher vacancy rates.

## Data Collection Process
1.Download Data from Ministry of Internal Affairs and Communications (MIC), Statistics Bureau: The data files from the Housing and Land Survey conducted by the Statistics Survey Department of MIC, Japan, including the 2023 Housing and Land Survey and the aggregated housing statistics.( https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00200522&tstat=000001207800&cycle=0&tclass1=000001207805&stat_infid=000040176386&tclass2val=0)

2.Scrape Aging Rate Tables from Cabinet Office: Scraping of aging rate tables from the Cabinet Office's website to analyze demographic trends.(https://www8.cao.go.jp/kourei/whitepaper/w-2022/html/zenbun/s1_1_4.html)

3.Download Prefectural GeoJSON Data: Acquisition of geojson files for Japanese prefectures, used for spatial analysis and visualization.(https://japonyol.net/editor/article/47-prefectures-geojson.html)

## Data Analysis Process
1.Extracts the number of households and vacant houses for each prefecture from the Ministry of Internal Affairs and Communications (MIC) data. It calculates the proportions and sorts them in descending order based on these values. Subsequently, it prepares the geojson files of prefectures using geopandas for editing in QGIS.

2.Utilizes web scraping to collect aging rate tables from the Cabinet Office's website. The data is structured into a DataFrame, sorted in descending order based on the values, and visualized in charts.

## New Skills and Growth
1.Utilized geopandas to integrate geographical information into pandas and performed filtering operations in QGIS.

2.Due to technical issues with the computer, missed using QGIS during mapping classes. Subsequently reviewed the course materials to regain proficiency in using QGIS.

3.Created image collages using Adobe Illustrator.

## Future Work
The dataset used in this project encompassed data from Japan's 47 prefectures, limiting the breadth of analysis. Future iterations aim to analyze more extensive datasets.

Also, Some charts lacked simplicity and omitted subtitles. Future efforts will prioritize creating clear and detailed charts.

Regarding mapping, there is a desire to incorporate map interactions via scrolling to enhance user experience and data exploration.


