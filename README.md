![Wing banner](./logo/banner.png)

<p align="center">
  &nbsp;
  <a href="https://docs.winglang.io/getting-started">Quick Start</a>
  ▪︎
  <a href="http://t.winglang.io/slack">Slack</a>
  ▪︎
  <a href="https://docs.winglang.io">Docs</a>
  ▪︎
  <a href="https://docs.winglang.io/status#roadmap">Roadmap</a>
  ▪︎
  <a href="https://docs.winglang.io/getting-started">Getting Started</a>
  ▪︎
  <a href="https://github.com/winglang/wing/issues">Issues</a>
  ▪︎
  <a href="https://github.com/winglang/wing/discussions">Discussions</a>
  ▪︎
  <a href="https://docs.winglang.io/contributors/">Contribute</a>
</p>

[![Short demo](./logo/demo.gif)](https://youtu.be/_c4U6ffumw8)

## Welcome to the Wing Language! :wave:

Introducing **Wing**, an open-source, statically-typed, cloud-oriented programming language that is ready to give your cloud development a lift! 💨
We're here to make your journey through the skies of AWS and other cloud providers more enjoyable and productive. 😎

Wing understands that the cloud is the computer 💻, so it abstracts the cloud to let developers work at a higher level of abstraction and select their target cloud at compile time. The result? The compilation artifacts are JavaScript and Terraform! 🎯

Created by [Elad Ben-Israel](https://github.com/eladb), the mastermind behind the [AWS CDK](https://github.com/aws/aws-cdk), Wing is designed to make your cloud development soar! 🦅

## What's so special about Wing? 🤔

Wing takes a unique approach to cloud development - instead of thinking about computers as machines, it treats the ***cloud as the computer***. ☁️
By abstracting the cloud, Wing allows anyone building cloud applications to focus on their business logic and choose the target cloud at compile time.

While your main code is written in Wing, the compilation artifacts are JavaScript and Terraform, with more provisioning engines on the way.

In addition, Wing provides a built-in local simulator, and an observability & debugging [console](https://docs.winglang.io/getting-started/console), making it easier for you to reduce cognitive load and context switching, enabling you to stay in your creative flow. 🎨

Here's a taste of what Wing code looks like:

```js
bring cloud;

// This code runs at compile time to provision the bucket
let bucket = new cloud.Bucket();

// Here we are able to interact with infra config of the bucket
bucket.stateful = true;

// An `inflight` represents code that runs later, on other machines
// and can interact with any cloud resources
let hello_world = inflight () => {
  bucket.put("hello.txt", "Hello, World!");
};

// We can then deploy the inflight as a serverless function
// (or in the future as a long-running service, etc.)
new cloud.Function(hello_world);
```

Ready to take off? 🛫

## Getting started 🛠️

> **Warning**
> Wing is in its alpha stage, and is not recommended for production yet.
> However, we're excited for you to take part in influencing every aspect of this project!
>
> Our <a href="https://docs.winglang.io/status">Project Status</a> page includes more information about our roadmap. 👷‍♀️

You can install Wing in a few simple steps:

1. Check out the [Prerequisites](https://docs.winglang.io/getting-started/installation#prerequisites).
2. Install the [Wing CLI](https://docs.winglang.io/getting-started/installation#wing-cli).
3. Get the [Wing IDE Extension](https://docs.winglang.io/getting-started/installation#wing-ide-extension) for your favorite editor.
4. Launch the [Wing Console](https://docs.winglang.io/getting-started/installation#wing-console) and take it for a spin!

For a step-by-step guide, head over to our [Getting Started](https://docs.winglang.io/getting-started) guide. It's a once-in-a-lifetime adventure into the Wing rabbit hole. 🕳️

## Why choose Wing? 🌟

Wing was built from the ground up to cater to cloud development, offering features that make it an ideal choice for building applications on AWS or other cloud providers.
Some of these features include:

* [Cloud services](https://docs.winglang.io/concepts/resources) as first-class citizens.
* Higher level of cloud abstraction with a [standard library](https://docs.winglang.io/reference/wingsdk-spec).
* [Distributed computing primitives](https://docs.winglang.io/concepts/inflights).
* [Compiler plugins](https://docs.winglang.io/reference/compiler-plugins) for customization.
* [JavaScript interoperability](https://docs.winglang.io/reference/spec#5-interoperability).
* Automatic generation of IAM policies.
* [Native JSON](https://docs.winglang.io/reference/spec#114-json-type) and schema validation support.

For a more in-depth look at Wing's features and benefits, check out our [documentation](https://docs.winglang.io/).

## Demo 🎬

[![Short demo](./logo/demo.gif)](https://youtu.be/_c4U6ffumw8)

## FAQs ❓

### Why Wing, not just another library or framework? 🤔

We believe that the cloud is a new kind of computer requiring a [new programming paradigm](https://docs.winglang.io/#what-is-a-cloud-oriented-language).
While it's possible to use this new paradigm with existing languages, we're convinced that a language natively supporting it, like Wing, will take it to new heights! 🚀

### Is there a company behind Wing? 💼

[Monada](https://monada.co) leads Wing's development.
The language and local simulator will always be open-source and free, with plans to donate them to a foundation -- and the Wing console will always be free for local development.
Monada's business model revolves around connecting the Wing console to production applications and charging for the enhanced management and observability experience.

## Community 💬

Join our flock in the [Wing Slack](https://t.winglang.io/slack) community!
We're here to help each other, answer questions, and share our cloud adventures.
Alternatively, post any questions on [GitHub Discussions](https://github.com/winglang/wing/discussions).

## Contributing 🤝

Want to help Wing take flight?
Check out our [contribution guide](https://github.com/winglang/wing/blob/main/CONTRIBUTING.md) to learn how to set up a development environment and contribute to the project.
We appreciate your support and look forward to soaring to new heights together! 🚀

We are grateful to our entire community 🙏 for contributing bug fixes and improvements:

<a href="https://github.com/winglang/wing/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=winglang/wing" />
</a>

## License 📜

Wing is licensed under the  [MIT License](./LICENSE.md). Contributions are made under our [contribution license](https://docs.winglang.io/terms-and-policies/contribution-license.html).

Happy coding, and remember: the sky's the limit with Wing! 🌤️🚀

[wing slack]: https://t.winglang.io/slack
