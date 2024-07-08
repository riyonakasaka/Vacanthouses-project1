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
1.Housing and Vacancy Data from MIC: Extracts the number of households and vacant houses for each prefecture from the Ministry of Internal Affairs and Communications (MIC) data. It calculates the proportions and sorts them in descending order based on these values. Subsequently, it prepares the geojson files of prefectures using geopandas for editing in QGIS.

2.Aging Rate Tables from Cabinet Office: Utilizes web scraping to collect aging rate tables from the Cabinet Office's website. The data is structured into a DataFrame, sorted in descending order based on the values, and visualized in charts.

## New Skills and Growth

## Future Work

## About this repository

### index HTML
[index HTML]() 
### jupyter notebook
[code 1]() -  
### data 
[main data]() 
<br>
