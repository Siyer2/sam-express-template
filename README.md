# SAM Express template

This is a simple template that allows you to create a Typescript Express REST API and deploy it AWS Lambda and API Gateway.

## Benefits

- Use traditional Express syntax (e.g. `app.get("/hello"...`) rather than having a `handler` per endpoint like [this](https://github.com/aws/aws-sam-cli-app-templates/blob/master/nodejs18.x/hello-ts/%7B%7Bcookiecutter.project_name%7D%7D/hello-world/app.ts)

  - Makes it easier to migrate to ECS
  - Simplifies local development

- Built with [esbuild](https://esbuild.github.io/) (billed as being 10-100x faster than other build tools)

## Running it locally

```
$ cd src
$ npm install
$ npm start
```

### Running it locally with SAM

(AWS SAM can be installed [here](https://aws.amazon.com/serverless/sam/))

You can also run it locally to _exactly_ match the configuation in the template.yml (e.g. to make it adhere to the set timeout, memory limit etc.)

```
$ sam build
$ sam local start-api
```

## Deploying it

```
$ sam build
$ sam deploy --guided
```

Following a successful deployment, the endpoint URL will get printed in the terminal.

Note: When doing `--guided`, you can follow the instructions. It will store your preferences in a `samconfig.toml` so you can just do a `sam deploy` in the future.
