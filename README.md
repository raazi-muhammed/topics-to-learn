# Contributing to [Project Name]

First off, thank you for considering contributing to our project! It's people like you that make it possible for [Project Name] to succeed and improve.

## Table of Contents

1. [How to Contribute](#how-to-contribute)
2. [Getting Started](#getting-started)
3. [Contributing to Existing Topics](#contributing-to-existing-topics)
4. [Creating a New Topic](#creating-a-new-topic)
5. [How to Report a Bug](#how-to-report-a-bug)
6. [How to Suggest a Feature](#how-to-suggest-a-feature)
7. [How to Submit a Pull Request](#how-to-submit-a-pull-request)

## How to Contribute

We welcome contributions in various forms, such as:

-   Reporting bugs
-   Suggesting new features
-   Writing or improving documentation
-   Fixing bugs or adding new functionality

## Getting Started

1. Fork the repository to your own GitHub account.
2. Clone the project to your local machine:

    ```sh
    git clone https://github.com/your-username/project-name.git
    ```

3. Create a new branch for your feature or bugfix:
    ```sh
    git checkout -b feature/your-feature-name
    ```

## Contributing to Existing Topics

1. You can see all the markdown files in the `/public/content` folder.
2. Select the topic you want to contribute to and make your changes.

## Creating a New Topic

1. To create a new topic, create a new markdown file in the `/public/content` folder.
2. Add the link to the file in `/src/constants/markdownLinks.ts`.
3. Add this item to the `topics` array in `/src/constants/topicList.ts`, including a title and description.

## How to Report a Bug

If you find a bug, please report it by opening an issue on GitHub. Please include:

-   A descriptive title
-   A clear description of the issue
-   Steps to reproduce the issue
-   Expected and actual results

## How to Suggest a Feature

If you have an idea for a new feature, please submit an issue on GitHub with the following information:

-   A descriptive title
-   A detailed description of the feature
-   Any relevant examples or mockups

## How to Submit a Pull Request

1. Commit your changes with a descriptive commit message:
    ```sh
    git commit -m "Add detailed description of your changes"
    ```
2. Push your branch to GitHub:
    ```sh
    git push origin feature/your-feature-name
    ```
3. Open a pull request on GitHub, providing a clear description of your changes and any relevant issue numbers.

Thank you for your contribution!
