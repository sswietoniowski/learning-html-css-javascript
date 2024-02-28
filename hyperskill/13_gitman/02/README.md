# Objectives

Create the `develop` branch using the `git-flow` command or create it with plain `git`:

```bash
git switch -c develop
```

Update the content of the main.py file to match the code block above:

```python
def main() -> None:
    name = input("What's your name? ")
    print(f"Hello, {name}!")


if __name__ == "__main__":
    main()
```

Add changes to the staging area:

```bash
git add main.py
```

Commit the changes with the message `Greet user by the name`:

```bash
git commit -m "Greet user by the name"
```
