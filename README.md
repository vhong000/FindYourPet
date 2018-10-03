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

**Compare changes:** `git diff <file name>` or `git diff . ` for all changes

### Common git usage
To update current branch

```
git checkout master
git pull
git checkout <branch name>
git merge master
git push // to push to own remote branch
```

To push changes to current branch

```
git status
git add .
git commit -m '<message>'
git push
```

To merge with master *(Be careful with this. PR recommended)*

*on own branch*
```
git checkout master
git pull
git checkout <branch name>
git merge master // merge local with current master
git push
git checkout master
git merge <branch name> // merge master with local
```

To create pull request

1. push changes to own branch
2. go to github project page
3. "new pull request"
4. select your branch
5. give info on code changes
6. wait for code review
