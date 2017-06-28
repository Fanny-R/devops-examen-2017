# devops-examen-2017

Travail réalisé dans le cadre du cours de NoSQL de la licence DevOps (IUT Lyon 1)    
Application web de gestion de bibliothèque utilisant le framework express et une base de données orienté documents MongoDB.



Structure des données :

{  
&nbsp;&nbsp; ISBN:  9782266247801,  
&nbsp;&nbsp;  title: "Les recettes de Nounou Ogg",   
&nbsp;&nbsp; author: "Terry Pratchett",   
&nbsp;&nbsp;  purchase_date: ISODate("2010-10-07T23:00:00Z"),   
&nbsp;&nbsp;  condition: 'Abîmé',   
&nbsp;&nbsp;  categories: [  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    "Livre de cuisine",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    "Vie pratique"  
&nbsp;&nbsp;    ]   
}

Livre emprunté :  
{   
&nbsp;&nbsp;  ISBN: 9782070437436,    
&nbsp;&nbsp;  title: "H2G2 Le Guide du voyageur galactique Tome 1",    
&nbsp;&nbsp;  author: "Douglas Adams",   
&nbsp;&nbsp;  purchase_date: ISODate("2010-10-07T23:00:00Z"),    
&nbsp;&nbsp;  condition: 'Neuf',    
&nbsp;&nbsp;  categories: [   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Guide de voyage",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Vie pratique"   
&nbsp;&nbsp;    ],    
&nbsp;&nbsp;    borrow: {   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   borrow_date: ISODate("2016-10-07T23:00:00Z"),   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   borrower: "Arthur Dent"   
&nbsp;&nbsp;     }  
}   
