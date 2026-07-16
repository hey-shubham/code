# Git Notes (Version Control System)

--> Git is a powerful version control system that allows developers to manage and collaborate on code effectively. By mastering Git commands and workflows, you can enhance your productivity and contribute to projects with confidence.


--> Git program ke time ke sath code ke changes ke track rakhne me madad karta hai. Isse aap apne code ke history ko dekh sakte hain, alag-alag branches bana sakte hain, aur dusre developers ke sath collaborate kar sakte hain.

-->agr code me koi galti ho jaye to git ke through aap easily usko undo kar sakte hain. Iske alawa, git ke through aap apne code ko remote repositories me push kar sakte hain, jisse dusre log bhi usko access kar sakte hain aur contribute kar sakte hain.


#Git ke kuch basic commands hain, jaise ki `git init`, `git clone`, `git add`, `git commit`, `git status`, `git log`, `git branch`, `git checkout`, `git merge`, `git pull`, aur `git push`. In commands ke through aap apne code ko manage kar sakte hain, branches bana sakte hain, aur remote repositories ke sath interact kar sakte hain.

# GIT installation:

- Windows: Download and install Git from [git-scm.com](https://git-scm.com/download/win).
- macOS: Install Git using Homebrew with `brew install git`.

# Git configuration:

- Set your username: `git config --global user.name "Your Name"`
- Set your email: `git config --global user.email "your.email@example.com"`



## Basic Commands

- `git init`: Initialize a new Git repository.
- `git clone <repository_url>`: Clone an existing repository.
- `git add <file>`: Add a file to the staging area.
- `git commit -m "commit message"`: Commit changes with a message.
- `git status`: Check the status of the repository.
- `git log`: View commit history.
- `git branch`: List all branches.
- `git checkout <branch_name>`: Switch to a different branch.
- `git merge <branch_name>`: Merge a branch into the current branch.
- `git pull`: Fetch and merge changes from the remote repository.
- `git push`: Push local changes to the remote repository.


## Branching and Merging

- `git branch <branch_name>`: Create a new branch.
- `git checkout -b <branch_name>`: Create and switch to a new branch.
- `git merge <branch_name>`: Merge the specified branch into the current branch.
- `git rebase <branch_name>`: Reapply commits on top of another base branch.

## Deleting Branches

- `git branch -d <branch_name>`: Delete a local branch.
- `git push <remote> --delete <branch_name>`: Delete a remote branch.

## Remote Repositories

- `git remote add <name> <url>`: Add a new remote repository.
- `git remote -v`: List remote repositories.
- `git fetch <remote>`: Fetch changes from the remote repository.
- `git pull <remote> <branch>`: Fetch and merge changes from the remote branch
- `git push <remote> <branch>`: Push local changes to the remote branch.


## Stashing Changes

- `git stash`: Stash changes in the working directory.
- `git stash list`: List all stashed changes.   
- `git stash apply`: Apply the most recent stash.
- `git stash pop`: Apply the most recent stash and remove it from the stash list.   



## Undoing Changes

- `git reset --soft HEAD~1`: Undo the last commit but keep changes in the staging area.
- `git reset --hard HEAD~1`: Undo the last commit and discard changes.
- `git checkout -- <file>`: Discard changes in a specific file.
- `git revert <commit>`: Create a new commit that undoes the changes from a specific commit.


## Collaboration

- `git fork`: Create a copy of a repository under your GitHub account.
- `git pull request`: Propose changes to a repository by creating a pull request on GitHub.
- `git review`: Review and comment on pull requests (requires GitHub integration).


## Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)   
- [Pro Git Book](https://git-scm.com/book/en/v2)