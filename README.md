# FindYourPet
CTP Project Fall 2018

## Git Commands
[http://rogerdudler.github.io/git-guide/](http://rogerdudler.github.io/git-guide/)

List of git commands that will be most used:

**Create a branch:** *while on master...* `git checkout -b <branch name>`

**Checkout to branch:** `git checkout <branch name>`

**Add changes:** `git add <file name>` or `git add . ` for all changed files

**Checkout changes:** `git checkout <file name>` or `git checkout .` for all changed files

**Check status:** `git status`

**Pull from remote:** `git pull`

**Commit changes:** `git commit -m "<commit message>"`

**Push commited changes:** `git push`

**Merge with master branch:** *while not on master...* `git merge master`

### Common git usage
Update current branch

```
git checkout master
git pull
git checkout <branch name>
git merge master
git push
```

push changes to current branch

```
git status
git commit -m '<message>'
git push
```

merge with master *(Be careful with this. PR recommended)*

*on own branch*
```
git checkout master
git pull
git checkout <branch name>
git merge master
git push
git checkout master
git merge <branch name>
```
