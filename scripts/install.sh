set -e

npm install && npm install --no-save \
  travis-deploy-once \
  semantic-release \
  @semantic-release/changelog \
  @semantic-release/git \
  @semantic-release/github \
  @semantic-release/npm \
  @semantic-release/exec
