# Lab 8 - Starter

Q1) you would fit the automated tests in Github actions that runs wheenver code is pushed. It needs to be automated, since github actions can be set to run everytime code is pushed to a certain branch, a good way to get a clean error report and automate your tests is to do it through github actions. You don't want to run them locally because you have to do it manually and even if you can make changes quickly, it may be hard to get a proper reading of what was wrong and take a long time to do so. Deploying first then running tests is quite counterintuitive. Running on Github actions is the best option. 

Q2) No

Q3) No you wouldn't. You would probably use E2E testing as you want to track that throughout the process of the user writing the message, hitting send, the data being transmitted over the network and recieved and displayed at on the other users screen. You would have to use a lot of unit tests to process all those steps, it would be very inefficient as unit tests are used to test smaller functionality of functions and outputs. Not great for tracking a whole process from start to finish. 

Q4) Yes you would. Unit testing is good for testing features in isolation and debugging on a small scale. Testing a max message length feature is the definition of small scale testing and using unit tests is good for isolating this feature and checking it works properly. 

Lab Partner(s): Arjun Kumar
