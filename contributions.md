
# BACKDOOR
### CONTRIBUTION GUIDES

- In order to contribute to the existing project
```bash
    git clone <https-project-link>
```
```bash
    cd BACKDOOR
```
- Creating a branch personally for contributing
```bash
    git checkout -b <your-branch-name>
```
- Checking the differences in the codebase
```bash
    git diff --word-diff
```
- Make your required changes to the file and codebase and then perform the following 
```bash
    git status
    git add .
    git commit -m "Contributor name | BACKDOOR | Changes made"
    git push origin <your-branch-name>
```
- Keeping your local repository updated with the main/master branch
```bash
    git remote -v
    > origin  https://github.com/YOUR-USERNAME/YOUR-FORK.git (fetch)
    > origin  https://github.com/YOUR-USERNAME/YOUR-FORK.git (push)
```
```bash
    git remote add upstream https://github.com/SUVAJIT-KARMAKAR/BACKDOOR
```
```bash
    git remote -v
    > origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (fetch)
    > origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (push)
    > upstream  https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (fetch)
    > upstream  https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (push)
```
```bash
     git fetch upstream
    > remote: Counting objects: 75, done.
    > remote: Compressing objects: 100% (53/53), done.
    > remote: Total 62 (delta 27), reused 44 (delta 9)
    > Unpacking objects: 100% (62/62), done.
    > From https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY
    >  * [new branch]      main     -> upstream/main  
```  
```bash
    git checkout <branch-name>
    > Switched to branch 'brach-name'
```
```bash
     git merge upstream/<branch-name>
    > Updating 34e91da..16c56ad
    > Fast-forward
    >  README.md                 |    5 +++--
    >  1 file changed, 3 insertions(+), 2 deletions(-)
```
- Git fetch upstream to reflect all changes to your local repository eveytime their is a change in the main fork
```bash
    git fetch upstream
```