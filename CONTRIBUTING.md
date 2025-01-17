# Contribution Guidelines

## Commit messages

Please use [conventional commits](https://www.conventionalcommits.org) (also known as _semantic commits_) to ensure consistent and descriptive commit messages when submitting PRs.

## General guidelines

Every example should follow a number of guidelines:

- Can be minimal or of complex/production-ready.
- Easily extensible.
- Follow [Prisma schema naming conventions](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference/#naming-conventions).
- Clear description about the different models and the different relations between them.
- Database schema diagram (can be generated using [`prisma-dbml-generator`](https://github.com/notiz-dev/prisma-dbml-generator)).
- Use [`faker.js`](https://github.com/marak/Faker.js/) to generate random data.

## Ways to contribute

The easiest way to contribute is by adding a missing example. Check [this](https://github.com/prisma/prisma-schema-examples/issues/1) GitHub issue to see which examples are currently missing.

### Adding a new example

Before submitting a PR for a new example, please first open an issue that explains the idea of the example and specifies what it will look like (e.g. how the Prisma datamodel will be defined or what kind of API will be built). It'll then be discussed in the issue whether your example is going to be added to the collection. To accelerate the process, you can ping @nikolasburk or @m-abdelwahab in the public [Prisma Slack](https://slack.prisma.io).

Once approved, you can add your example to [list of missing examples](https://github.com/prisma/prisma-schema-examples/issues/1) and start implementing it in a PR. Do note that all examples on `main` will automatically show up on the [Prisma Data Platform](https://cloud.prisma.io)

The easiest way to create a new example is to duplicate an existing one and change things in there. If you decide to write a new one from scratch, here's a handy checklist of things to check before submitting a PR:

- [ ] The example includes a `prisma/schema.prisma` file
- [ ] The example includes a `prisma/seed.ts` file. Because of Prisma Data Platform's implementation details, you must follow a few guidelines when writing your seed file:

  - [ ] You must remember to `$prisma.disconnect()` at the end of your seed script

  - [ ] Make sure your `seed` function throws errors, do not swallow them in a `catch` block.

- [ ] The example includes a `.gitignore` file
- [ ] The example includes a `diagram.png` file
- [ ] The example includes a `package.json` file
- [ ] The example includes a `README.md` file
- [ ] The example includes a `sandbox.ts` file
- [ ] The example includes a `tsconfig.json` file

### Improving an existing example

If you find that an example can be designed better, please feel free to open an issue or submit a PR with your suggestions. To accelerate the process, you can ping @nikolasburk or @m-abdelwahab in the public [Prisma Slack](https://slack.prisma.io).

Once approved, you can go ahead and implement the changes.
