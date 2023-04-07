export default {
  title: "dotnet-versioninfo",
  repo: "dotnet-versioninfo",
  repoLink: "https://github.com/taylorjg/dotnet-versioninfo",
  website: "https://www.nuget.org/packages/dotnet-versioninfo",
  technologies: ["C#", ".NET"],
  shortDescription:
    ".NET global tool to display the version info of .NET assemblies",
  longDescriptionMarkdown: `
A while back, I encountered an error whilst developing a little F# app on macOS.

I wanted to examine the versions of all the DLLs in order to troubleshoot the problem.
However, I could not find an easy way to do this. I eventually fixed the problem
(briefly described [here](https://github.com/taylorjg/FsTweet#package-woes)).

As a result of this experience, I decided to write a
[.NET Core Global Tool](https://docs.microsoft.com/en-us/dotnet/core/tools/global-tools)
to make it easy to display the version information of .NET Core assemblies.
  `,
  cardImage: {
    path: "screenshots/dotnet-versioninfo/card-image.webp",
    caption: "dotnet-versioninfo screenshot",
  },
};
