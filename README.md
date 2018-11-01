# github-needs-qa

> Prevent merging of Pull Requests with "needs qa" or related labels attached.

<p align="center">
  <img alt="needs qa steps" src ="https://media.giphy.com/media/l4pSU121cLwSeJudG/giphy.gif"/>
</p>

## Setup

 - Setup:

  ```bash
    git clone git@github.com:graemeRharvey/github-needs-qa.git

    cd github-needs-qa

    npm install
  ```
 - You need to Create your own [GitHub app](https://probot.github.io/docs/development/#configure-a-github-app)
 - Update the `.env` file.

 - Run `npm start`


## Usage
- When creating a pull request that you don't want to be merged, simply add the label "Needs QA || QA Required".
- the app will set/update the status of the pull request depending on the pull requests label.


## Deployment

 See [docs](https://probot.github.io/docs/deployment/) for more info.
