# gitHub cheat sheet 
has the short notes for basic and better understanding of gitHub

# Why do we need GIT ?
+ enables us to track versions of file
+ helps create book marks we can roll back to
+ eases the communication of different developers working on the same project
+ error incurred in new version can be worked with using bookmarks created in code history (can be seen using `git log`)
+ lets us keep our files updated to changes done by other

# what is .md file?
  readme.md file is a markdown extension file which is actually a language used for HTML, and has specific symbols denoting different elements.

# Simple steps paradigm
STEP 1. `git clone https://github.com/Akshitajain1906/Wisflux-Academy-Summer-Internship---2022.git`clone repo (url used is of repo).
STEP 2. browse to respective folder or create files
STEP 3. `git init`
STEP 4. `git add --all`
STEP 5. `git commit -m 'added files'` '-m' stands for message
STEP 6. `git remote add origin https://github.com/Akshitajain1906/Wisflux-Academy-Summer-Internship---2022.git` lets us hook our local file to repo in gitHub
STEP 7. `git push -u origin main` 'since i cloned i had main and i was working in it so i am pushing main, it could've been master or some new branch too'

# INSIGHTS OF COMMANDS USED
+ `git init`- To initialize the git repository - 
+ `git status` - displays the current status of the repository
+ `git add [filename]` --> git will now start tracking the file, adds a change in the working directory to the staging area.
+ `git add [--all]` --> git will now start tracking all files, add the files or changes to the **repository**.
+ _tracked_ is file that Git knows about (the file's versions and all).
+ _not tracked_ is a file that Git does not know about (not tracking it's versions).
+ __commit__ is a point in time, a point in the history of your code that you can go back too..
+ each commit in git is identified by a 40 character code.
+ `git commit -m ["message"]` -m means message. the message should be meaningful
+ __Staging Area__ --> currently the code which is being worked on 
+ __Working Copy__ has two types of files :- 
    - Tracked Files
    - Untracked Files
+ __refs__ are also known as __branches__.
+ `git checkout -b [branch-name]` makes a new branch from the latest commit
+ `git checkout [branch-name]` change branches
+ `git remote add origin [repo URL]` - add an external repository
+ `git push --all` - push all the local code to the repository
+ `git fetch` will fetch remote object and make pointers in the hidden folder but it wont merge the changes to local repo
+ `git pull` internally executes two commands - `git fetch` and `git merge` which fetches objects from remote branch __and__ merge them with the local code
**.git** is a hidden folder by default
+ Git stores it's information in a tree structure
+ For git, a branch is nothing but a pointer to a commit.

# Useful VSCODE extensions 
+ __git graph__ extension for VSCODE shows graphs and trees of the commits

Difference between **.** and **..**
+ `.` --> Current Directory
+ `..` --> Parent Directory

## Git is DVCS - **Decentralised Version Control System**

DVCS - Has the full capability of the repository with whoever has the code
Developer can keep on working on the code without worrying about the syncronization


# GitHub shortcuts
<img width =50% src="https://raw.githubusercontent.com/Akshitajain1906/Wisflux-Academy-Summer-Internship---2022/main/Day-03%20assignment/git%20stuff/follow%20along%20files/shortcuts.png">
<img width =80% src="https://raw.githubusercontent.com/Akshitajain1906/Wisflux-Academy-Summer-Internship---2022/main/Day-03%20assignment/git%20stuff/follow%20along%20files/shortcuts%20(1).png">

# Git Structure
<img  width =50% src="https://raw.githubusercontent.com/Akshitajain1906/Wisflux-Academy-Summer-Internship---2022/main/Day-03%20assignment/git%20stuff/follow%20along%20files/Git%20Structure.png">
