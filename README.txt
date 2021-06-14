FIRST TIME CLONING
1) git clone https://github.com/Team6NodeProject/FinalProject
2) cd FinalProject
3) git checkout -b yourBranchName
4) //Make all your changes you want to make with your code!
5) git add * 
6) git commit -m "Add commit name"
7) git push origin yourBranchName
8) //Go to github website and make a PULL request to merge your code with the main project.
9) // One elected person will merge your branch with the main branch.
10) // If there are conflicts we should try and resolve together, then merge will be completed.
11) git push origin :yourBranchName
12) git checkout main
13) git pull
14) git branch -d yourBranchName

ALL SUBSEQUENT CLONES
1) git checkout main 
2) git pull https://github.com/Team6NodeProject/FinalProject main
3) git checkout -b yourBranchName
4) //Make all your changes you want to make with your code!
5) git add *
6) git commit -m "Add commit name"
7) git push origin yourBranchName
8) //Go to github website and make a PULL request to merge your code with the main project.
9) // One elected person will merge your branch with the main branch.
10) // If there are conflicts we should try and resolve together.
11) git push origin :yourBranchName
12) git checkout main
13) git pull
14) git branch -d yourBranchName
