export const aboutMe = {
    name: `Wali Farooqui`,
    address: `Toronto, M5T 2S9`,
    summaryLines: [
    `Perceptive and logical data analyst with proven ability to communicate with both technical professionals and end-users to identify and translate business requirements. Data Analyst with over 2 years of experience of driving data processing, analysis and insight.`,

    `I have put-on different hats within my career till date and it has blessed me with diverse skills. I learned DevOps & agile best practices and automation of release cycle to increase efficiency and productivity of the team during my term at HCL. Being in shoes of a Web developer, I learned about end-to-end development and management of web applications and this skill encouraged me to try and launch my venture (lamara.co.in – fashion eCommerce). Unfortunately, things went downhill.`,
    
    `I am a team player with the ability to work independently and always ready to learn and evolve as per the role. I have intermediate but evolving skills in machine learning, data science and big data ecosystem.`,
    
    `My specialities include quickly learning new skills, problem-solving and following best practices to keep code & process simple and manageable. So far I have Python (and its data science & machine learning libraries), Flask, SQL, NoSQL, Bigdata Ecosystem, JavaScript, React, PostgreSQL and MongoDB etc under my belt. I am still enthusiastically grabbing new tools/techniques, frameworks or principles which I can integrate into my skill-set and problem-solving approach.`
    ],
    email:`walifarooqui@gmail.com`,
    linkedin:`https://linkedin.com/in/walifarooqui`,
    github:`https://github.com/pharoah`
};
export const educationList = [
    
    {
        institute: `ABV - Indian Institute of Information Technology and Management, India`,
        course: 'Information Technology',
        degree: 'Master of Technology',
        duration: `July, 2012 - May, 2014`
    },
    {
        institute: `ABV - Indian Institute of Information Technology and Management, India`,
        course: 'Information Technology',
        degree: 'Bachelor of Technology',
        duration: `July, 2009 - May, 2012`
    }
];

export const experienceList = [
    {
        id:`01`,
        job_title: `Data Analyst`,
        company: `Greenwheels Automobile Pvt Ltd`,
        job_duties: [
            `Analyzed data to drive growth for the company and reduced operational costs by 20%.`,
            `Collected and analyzed data on established and prospective customers, competitors and marketing channels and sources.`,
            `Converted data into actionable insights by predicting and modeling future outcomes.`,
            `Performed data mining activities of gathering and compiling data to ensure data integrity.`,
            `Utilized SQL, Tableau and Python for visualization and data wrangling/ETL.`
        ],
        duration: `December 2016 - March 2019`
    },
    {
        id:`02`,
        job_title: `Web Developer`,
        company: `Wiztech Consultancy Pvt Ltd`,
        job_duties: [
            `Developed web applications, REST APIs and integrated data from various back-end sources and databases.`,
            `Integrated third-party payment gateway systems, email servers and other services as required.`,
            `Developed several ecommerce web applications utilizing Magento, WordPress and Python/Flask.`,
            `Performed server configuration, maintenance, user training and prepared system documentation.`,
            `Optimized website for Google’s PageSpeed matrices by implementing various best practices.`,
        ],
        duration: `July 2015 - November 2016`
    },

    {
        id:`03`,
        job_title: `Management Trainee`,
        company: `HCL Technologies Ltd`,
        job_duties: [
            `Worked in DevOps team and followed best practices to ensure fast and reliable product releases.`,
            `Assessed CI/CD, QA/UT and Version control tools and created technical user documents. To name few, Jenkins, JIRA, AutoPilot by Arago, Git, SVN etc.`,
            `Created deployment/release plan using CA Release Automation (Nolio), along with python scripts and created its technical user guide.`,
            `Utilized SQL/NoSQL database systems, completed load balancing and proxying of systems servers and components.`,
            `Worked within Cloud for integration processes with focus on automation and monitoring.`
        ],
        duration: `August 2014 - June 2015`
    }
];

export const certificateList = [
    {
        title: `Advance Data Science with IBM, a 4-course specialization by IBM on Coursera`,
        month:`07/2019`
    },
    {
        title: `IBM Data Science Professional Certificate, a 9-course specialization by IBM on Coursera`,
        month:`05/2019`
    },
    {
        title: `Convolutional Neural Networks in TensorFlow by deeplearning.ai on Coursera`,
        month:`07/2019`
    },
    {
        title: `Natural Language Processing in TensorFlow by deeplearning.ai on Coursera`,
        month:`07/2019`
    },
    {
        title: `Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning by deeplearning.ai on Coursera`,
        month:`07/2019`
    }

];

export const projectList = [
    {
        id:`01`,
        name:`The Battle of Negihborhood`,
        description:`This project tried to identify new location for a restaurant in New York city. Cuisines, Demographics and Neighborhood
                 data were scraped from Wikipedia, Further Farmer's market data was taken from cityofnewyork.us and NYC
                 data from nyc.edu. K-Mean clustering with 2 clusters was applied on the dataset and foursquare api along with folium and
                 geopy were utilized to visualize clusters on Map.`,
        link:`https://github.com/pharoah/The-Battle-of-Neighborhoods`,
        category:`Machine Learning`,
        image:`restaurants.png`
        },
        
        {
        id:`02`,
        name:`Credit Card Fraud Detecttion`,
        description:`In this project I utilized dataset from kaggle and did a comparative analysis of models for fraud detection.
		     I build 4 models using Isolation Forest, Local Outlier Factor, AutoEncoder and LSTM. Area under ROC curve was metric for evaluation 
		     given imbalance ration in dataset. After considering threhold of 5 and reconstructing confusion matrix, AutoEncoder outperformed other
		     models on metrics under considertion.`,
        link:`https://github.com/pharoah/Credit-Card-Fraud-Detection---Capstone-Project`,
        category:`Machine Learning`,
        image:`credit_fraud.png`
        },
        
        {
        id:`03`,
        name:`Digit Recognizer`,
        description:`This project was part of the kaggle competition, dataset has 42000 digits and each digit has 784 pixels as data points and 1 as label. There were
		     10 labels for each digits in range 0-9. I utilized keras to build DNN model with 2 dense layer and 1 dropout layer to apply regularization. In result,
		      model predicted with accuracy of 98% and models was among top 20% of total submissions on kaggle. `,
        link:`https://github.com/pharoah/DigitRecognizer`,
        category:`Machine Learning`,
        image:`digits.png`
        },
        
        {
        id:`06`,
        name:`Housing Prices - Regression`,
        description:`This was a part of competition submission on kaggle, dataset included 1460 house prices as label with 79 explanatory variables describing
            (almost) every aspect of residential homes in Ames, Iowa.I utilized ANOVA and Chi-squared Test for feature engineering and then build regression model utilizing XGBooast.
            After performing parameter tuning model was able to achieve RMSE score of 0.021.`,
        link:`https://github.com/pharoah/HousePrices-Regression`,
        category:`Machine Learning`,
        image:`housing.png`
        },
        
        
        {
        id:`10`,
        name:`Lamara - Fashion Ecommerce`,
        description:`This was the venture in fashion eCommerce, I successfully launched and started operations with the collaboration of the mciro and small garment enterprises
                in Mumbai, India. I built eCommerce website for Lamara utlizing Magento 2, Postgresql, , Varnish, Cloudflare and it was hosted on AWS. Further, we had 3 payment gateways, 1 affiliated plaftorm, Email Server, Zoho CRM,
                and many other third party services to provide exceptional services.`,
        link:`https://lamara.co.in/`,
        category:`Web Development`,
        image:`lamara.png`
        },
        
        {
        id:`11`,
        name:`Blog CMS with Flask`,
        description:`This is a simple full featured web applciation with flask at the backend. Project is simple and easy to use blogging platform. I have features
		     like pagination, email-verification, account access control, and database for blog. Further, this is a on going personal project. I intend to add features
		     like conversion jupyter notebook to blog post to enable data scientists and machine learning prationers to tell their story efficiently.`,
        link:`https://github.com/pharoah/Data-Science-Blog`,
        category:`Web Development`,
        image:`blog-cms.png`
        },
        
        {
        id:`12`,
        name:`Resume App`,
        description:`This is a simple Resume web application based on SPA architechture utilizing React,
		     ResumeApp also has additional feature to deploy your machine learning models and access results via REST API with Flask at the backend.
		     Hence, I have built frontend for Regression, Classification and Clustering with 1 input for prediction at a time.`,
        link:`https://github.com/pharoah/ResumeApp`,
        category:`Web Development`,
        image:`resume.png`
        }       
];

export const skillList = [
    {
        type:`fonts`,
        name:`Programming Languages & Tools`,
        fonts:
        [
            {name:`Python`,font:`devicon-python-plain`},
            {name:`C`, font:`devicon-c-plain`},
            {name:`JavaScript`, font:`devicon-javascript-plain`},
            {name:`HTML5`, font:`devicon-html5-plain`},
            {name:`CSS3`, font:`devicon-css3-plain`},
            {name:`Git`, font:`devicon-git-plain`},
            {name:`React`, font:`devicon-react-original`},
            {name:`Wordpress`, font:'devicon-wordpress-plain'},
            {name:`PostgreSQL`, font:`devicon-postgresql-plain`},
            {name:`MongoDB`, font:`devicon-mongodb-plain`},
            {name:`Linux`, font:`devicon-linux-plain`},
            {name:`Nginx`, font:`devicon-nginx-original`},
            {name: `Docker`, font:`devicon-docker-plain`},
            {name: `Amazon Web Services`, font:`devicon-amazonwebservices-original`}
        ]
    },

    {
        type:`icons`,
        name:`Data Science & ML Tools`,
        icons:
        [
            {name:`SQL`, img:`sql.svg`},
            {name: `NoSQL`, img:`nosql.svg`}, 
            {name: `Flask`, img:`flask.svg`},
            {name: `Jupyter Notebook`, img:`jupyter.svg`}, 
            {name:`NumPy`, img:`numpy.svg`},
            {name: `Pandas`, img:`pandas.svg`},
            {name: `MatPlotLib`, img:`matplotlib.svg`}, 
            {name: `Keras`, img:`keras.svg`}, 
            {name: `TensorFlow`, img:`tensorflow.svg`},
            {name: `Scikit-Learn`, img:`scikit-learn.svg`}, 
            {name: `Apache Spark`, img:`spark.svg`}, 
            {name: `Apache kafka`, img:`kafka.svg`}, 
            {name: `Tableau`, img:`tableau.svg`}, 
            {name: `Microsoft Excel`, img:`excel.svg`}
        ]
    },

    {
        type:`text`,
        name:`Functional Skills`,
        topics:[`Machine Learning`, `Deep Learning`, 
                `Natural Language Processing`, `Computer Vision`, `ETL/EDA`, `Big Data Ecosystem`, `Predictive Analysis`,
                `Data Wrangling`, `Data Modeling`,
                `Data Analysis`, `Data Visualization`,
                `Feature Engineering`, `Agile`, `DevOps`, `MLOps`
                ]
    }

    ];