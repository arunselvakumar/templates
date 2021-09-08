import execa from 'execa'

/**
 * TODO: Set up mysql test.yml
 * TODO: setup matrix for databases from env
 * TODO: Create lookup for different database
 * TODO: make run dynamic - modify provider to mysql
 * TODO: make run dynamic - modify provider to sqlserver and add previewFeatures
 * TODO: add type-safety to this
 */
const projects = [
  {
    templateName: 'musicStreamingService',
  },
  {
    templateName: 'rentalsPlatform',
  },
  {
    templateName: 'saas',
  },
  {
    templateName: 'urlShortener',
  },
]

describe('Seed and run script', () => {
  test.concurrent.each(projects)('$templateName against Postgres', async ({ templateName }) => {
    const execaConfig: execa.SyncOptions = {
      cwd: `../../${templateName}`,
      env: {
        DATABASE_URL: `${process.env.DATABASE_SERVER_URL}/${templateName}`
      }
    }

    execa.commandSync(`npm install`, execaConfig)

    // Reset database in development
    if (!process.env.CI) execa.commandSync(`yarn prisma migrate reset --force --skip-seed`, execaConfig)

    const init = execa.commandSync(`npm run init`, execaConfig)
    expect(init.exitCode).toBe(0)

    const script = execa.commandSync(`npm run dev`, execaConfig)
    expect(script.exitCode).toBe(0)
  })
})
