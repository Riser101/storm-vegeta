The real use of money is to buy freedom.

#Products:
`VWO` 		 
	
	Visual Website Optimizer (A/B testing or split testing)


`PushCrew`  
		
	Send updates, news, offers to users realtime as notifications

`VegFru`

	platform for famers	

`Primary.is `

	Market place for luxury boutiques and independent designers

#Start:
**1.Start with very basic requirements. **

#Evolve:
**1.Case study of polls on IMDB.** 

Talk about competitors. 

Talk about constraints specific to this product industry.


**2.Observe what has worked with users for Imdb.**

 What could work for us, what could you personalize that experience as bookmyshow specific.

#Polls
###Settings: 
Spread into two halves,

`one:` Won't be changed quite frequently. 

`two:` change frequently. 

	One waala=> min question length, max question length, min and max no. of tags, options, comments length 	etc
	
	Two waala=> max no. polls allowed to trending, max no. of featured polls allowed in the system, life of 	a poll in which it can become a trending poll.

#Preplanned features (required):

1.should be able to **create polls.**

2.should have **trending polls feature.**

3.should have **featured polls feature.**

4.should be able to **vote.**

#what we thought could be next required:
1.ability to **Like Dislike Polls.**

2.ability to **Share polls**

**3.report abuse**

#Evolution: *bifurcation of tag engine.*
Initially tag engine was part of polls, gradually it made sense to have a separate **`central tag engine` that talks to different systems.**

#Evolution of rabbit wrapper.

perfect development on local system. the best library ever. 

1.testing on `test servers.` Awesome performance.

2.testing on `live servers.` Broke due to `insufficient ram on clusters.` 

3.`integration with other systems:` 
	
A.Things like some live projects require `error logging and some not`. so we went ahead and `added an option` in the library config to `turn on/off generation of logs.`
	
B.Some projects were using composer and some not. so we took a decision to remove composer. people were more comfortable without it. 
	
C.`Difference between live and test servers. virtual host not present in live servers.` test pe they had one rabbit server and different virtual hosts for different projects/systems. That meant one username and password but different virtual host. On live server it meant, different username and password and no virtual host i.e (simply "/").


#How to decide what to build?
1. market needs		

2. 2.how well these market needs align with my bussiness needs.	
3. engineering->user feedback.