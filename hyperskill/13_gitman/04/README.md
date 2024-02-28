# Objectives

Switch to the `main` branch:

```bash
git switch main
```

Create a new branch with the name `hotfix/no-more-typos`:

```bash
git switch -c hotfix/no-more-typos
```

Modify the `main.py` file to be the same as the code block above:

```python
if __name__ == "__main__":
    print("Hello, world!")
```

Add changes to the staging area:

```bash
git add main.py
```

Commit the changes with the message `Fix typos`:

```bash
git commit -m "Fix typos"
```

Switch to the `main` branch:

```bash
git switch main
```

Merge `hotfix/no-more-typos` branch to the `main`:

```bash
git merge hotfix/no-more-typos
```
