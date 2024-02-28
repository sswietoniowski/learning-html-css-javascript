# Objectives

First, go to the `develop` branch and start the rebase on `main` with the command `git rebase main`:

```bash
git switch develop
git rebase main
```

Oops! It seems that git has problems with auto-merging the `main.py` file and warns you about it:

```plaintext
CONFLICT (content): Merge conflict in main.py
```

Open the `main.py` in an editor, fix the conflicts, and save the file. (Remove the lines with the conflict markers, <<<<<<<, =======, >>>>>>>).

Then add the file to the git index (staging area), commit, and continue the rebase:

```bash
git add main.py
git rebase --continue
```
