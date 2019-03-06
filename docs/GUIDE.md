# 开发者需知

## 开发流程

为保证项目质量，目前采用标准的 Pull Request 流程。

## 版本发布

PR 被 merge 之后，由 trivisCI 自动处理版本发布。

需要注意严格遵守 [commit message 规范](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)，平时提交直接使用 `npx git-cz` 或者 `yarn commit`。

## 开发版如何预览效果

先在本地执行 `yarn build` 或者 `yarn dev`，以保证 `dist/` 目录下有文件生成。

然后需要依赖 `clair-utils` 的项目中，直接本地安装即可：

`yarn add $PATH_TO_YOUR_LOCAL_FORKED_REPO`
