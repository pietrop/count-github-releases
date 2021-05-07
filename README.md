## Count Github Releases

<!-- _One liner + link to confluence page_
_Screenshot of UI - optional_ -->

Node module to count the github downloads from a project release, via the github api. [based on this blog post](https://pietropassarelli.com/ttqf/2016/05/26/how_to_find_out_github_release_downloads/)

This might only work with [autoEdit2/3](https://www.autoedit.io) github repos releases, due to how the data is structured. But could maybe be forked to make more general etc...

## Setup

<!-- _stack - optional_
_How to build and run the code/app_ -->

```
git clone git@github.com:pietrop/count-github-releases.git
```

```
cd count-github-releases
```

```
npm install
```

## Usage

```
npm run serve
```

<!-- ## System Architecture -->

<!-- _High level overview of system architecture_ -->

<!-- ## Documentation

There's a [docs](./docs) folder in this repository.

[docs/notes](./docs/notes) contains dev draft notes on various aspects of the project. This would generally be converted either into ADRs or guides when ready.

[docs/adr](./docs/adr) contains [Architecture Decision Record](https://github.com/joelparkerhenderson/architecture_decision_record).

> An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences.

We are using [this template for ADR](https://gist.github.com/iaincollins/92923cc2c309c2751aea6f1b34b31d95) -->

## Development env

 <!-- _How to run the development environment_ -->

- npm > `6.1.0`
- [Node 12](https://nodejs.org/docs/latest-v12.x/api/)

Node version is set in node version manager [`.nvmrc`](https://github.com/creationix/nvm#nvmrc)

```
nvm use
```

<!-- _Coding style convention ref optional, eg which linter to use_ -->

<!-- _Linting, github pre-push hook - optional_ -->

## Build

<!-- _How to run build_ -->

_NA_

## Tests

<!-- _How to carry out tests_ -->

_NA_

## Deployment

<!-- _How to deploy the code/app into test/staging/production_ -->

_NA_
